import argparse
import os.path
from collections import OrderedDict
import re
import scene_rdl2
from jinja2 import Environment, FileSystemLoader

hex_re              = re.compile('0[xX][0-9a-fA-F]+')

def replace_mem_address(input):
    return hex_re.sub('...', str(input))

def interfaceSet(interface):
    """ converts a SceneObjectInterface bit set into
        a Python set of string names"""
    s = set()
    bits = int(interface)
    for (v,i) in scene_rdl2.SceneObjectInterface.values.items():
        if i == scene_rdl2.SceneObjectInterface.GENERIC: continue
        if bits & v: s.add(i.name)
    return s

class ScnClass(object):
    """ represents a SceneClass in the data passed to the template
        a sample object is used to get the attribute default values"""
    def __init__(self,rdlCls,rdlObj):
        self.rdlCls = rdlCls
        self.name = rdlCls.getName()
        self.interfaces = interfaceSet(rdlCls.getDeclaredInterface())
        self.attributes = []
        attrMap = {}
        # generate flat list of attributes under .attributes
        for name in sorted(rdlCls.getAttributeNames()):
            a = Attr(rdlCls.getAttribute(name),
                     rdlObj.get(name))
            self.attributes.append(a)
            attrMap[name] = a
        # generate grouped attributes under .groups
        self.groups = []
        for group in sorted(rdlCls.getAttributeGroupNames()):
            names = []
            for i in range(rdlCls.getAttributeGroupSize(group)):
                names.append(rdlCls.getAttributeFromGroup(group,i).getName())
            attrs = []
            for name in sorted(names):
                attrs.append(attrMap[name])
                del attrMap[name]
            self.groups.append(AttrGroup(group,attrs))
        if len(attrMap) > 0:
            attrs = []
            for name in sorted(attrMap.keys()):
                attrs.append(attrMap[name])
            self.groups.append(AttrGroup("General",attrs))

    def getSubdir(self):
        """ determine a subdirectory name based on SceneClass"""

        # Unfortunately we cannot currently rely on the class's .interfaces
        # set because many are incomplete or empty altogether, so for now we'll
        # use regular expression matching based on the class name

        result = ''
        for pattern, subdir in self.subdir_patterns.items():
            if (pattern.match(self.name)):
                result = subdir
                # print("{:<32} --> {}".format(self.name, subdir))
                break

        if not result:
            self.unorganized_classes.append(self.name)

        return result

    # defines a set of rules on how to organize the .md files into
    # the 'docs' dir based on class name.  Note tha these Rules are
    # not mutually exclusive, and they are processed in order.
    subdir_patterns = OrderedDict([
        (re.compile(".*Camera(_v[0-9]*)?$")              , "scene-classes/cameras"),
        (re.compile(".*Displacement(_v[0-9]*)?$")        , "scene-classes/displacement"),
        (re.compile(".*DisplayFilter(_v[0-9]*)?$")       , "scene-classes/display-filters"),
        (re.compile(".*Geometry(_v[0-9]*)?$")            , "scene-classes/geometry"),
        (re.compile("^GeometrySet$")                     , "scene-classes/geometry-set"),
        (re.compile(".*Joint$")                          , "scene-classes/joint"),
        (re.compile(".*Layer$")                          , "scene-classes/layer"),
        (re.compile(".*Light(_v[0-9]*)?$")               , "scene-classes/lights"),
        (re.compile(".*LightFilter(_v[0-9]*)?$")         , "scene-classes/light-filters"),
        (re.compile("^LightFilterSet$")                  , "scene-classes/light-filter-set"),
        (re.compile("^LightSet$")                        , "scene-classes/light-set"),
        (re.compile(".*NormalMap(_v[0-9]*)?$")           , "scene-classes/normal-maps"),
        (re.compile("^(?!.*(Normal)).*Map(_v[0-9]*)?$")  , "scene-classes/maps"),
        (re.compile("^Dwa.*Material(_v[0-9]*)?$")        , "scene-classes/materials/dwa"),
        (re.compile("^Hair.*Material(_v[0-9]*)?$")       , "scene-classes/materials/hair"),
        (re.compile(".*Material(_v[0-9]*)?$")            , "scene-classes/materials"),
        (re.compile("^Metadata$")                        , "scene-classes/meta-data"),
        (re.compile("^RenderOutput$")                    , "scene-classes/render-output"),
        (re.compile("^SceneVariables$")                  , "scene-classes/scene-variables"),
        (re.compile("^ShadowReceiverSet$")               , "scene-classes/shadow-receiver-set"),
        (re.compile("^ShadowSet$")                       , "scene-classes/shadow-set"),
        (re.compile("^TraceSet$")                        , "scene-classes/trace-set"),
        (re.compile("^UserData$")                        , "scene-classes/user-data"),
        (re.compile(".*Volume(_v[0-9]*)?$")              , "scene-classes/volumes"),
        (re.compile("^UsdPreviewSurface$")               , "scene-classes/materials"),
        (re.compile("^Usd.*")                            , "scene-classes/maps"),
        (re.compile("^NormalToRgbMap$")                  , "scene-classes/maps")
    ])

    unorganized_classes = []

class AttrGroup(object):
    """ represents a group of attributes
         in the data passed to the template"""
    def __init__(self,name,attrs):
        self.name = name
        self.attributes = attrs

def objTypeStr(rdlAttr):
    """ the type name to use when getTypeName() returns 'SceneObject'"""
    ot = str(rdlAttr.getObjectType()).capitalize()
    if ot == 'Generic': ot = 'Object'
    return ot

class Attr(object):
    """ represents an attribute in the data passed to the template"""
    def __init__(self,rdlAttr,defaultValue):
        self.rdlAttr = rdlAttr
        self.defaultValue = defaultValue

    @property
    def name(self): return self.rdlAttr.getName()
    @property
    def default_value(self): return self.defaultValue
    @property
    def type(self): 
        t = self.rdlAttr.getTypeName()
        if t == 'SceneObject': return objTypeStr(self.rdlAttr)
        elif t == 'SceneObjectVector': return objTypeStr(self.rdlAttr) + " Vector"
        return t
    @property
    def bindable(self): return self.rdlAttr.isBindable()
    @property
    def blurrable(self): return self.rdlAttr.isBlurrable()
    @property
    def enum(self): return self.rdlAttr.isEnumerable()
    @property
    def file(self): return self.rdlAttr.isFilename()
    @property
    def hasComment(self): return 'comment' in self.rdlAttr.getMetaDataKeys()
    @property
    def comment(self): 
        return self.rdlAttr.getMetadata('comment')
    @property
    def flags(self):
        """ flags as a list of strings"""
        f = []
        if self.bindable: f.append('bindable')
        if self.blurrable: f.append('blurrable')
        if self.enum: f.append('enum')
        if self.file: f.append('filename')
        return f
    @property
    def hasFlags(self):
        return len(self.flags) > 0
    @property
    def enumValues(self):
        """ returns (name,val) pairs for attr's enum values """
        v = []
        for k in self.rdlAttr.getEnumValKeys():
            v.append((self.rdlAttr.getEnumDescription(k),k))
        return v

def parse_args():
    parser = argparse.ArgumentParser(description="Generate Moonray class documentation from templates")

    parser.add_argument('-c','--class',
                        dest='class_name',
                        help='Class to generate')
    parser.add_argument('-i','--interface',
                       help='Generate all classes with the given interface. NOTE: This is unreliable due to incomplete class definitions')
    parser.add_argument('-t','--template',
                        default='default_template.md',
                        help='Specify template file to use')
    parser.add_argument('-d','--dir',
                        help='Specify output directory. This should likely be the "docs" folder in your documentation repo')
    parser.add_argument('-a','--all', action='store_true',
                        help='Generate all classes')

    return parser.parse_args()

def generate(cls,template,dir=None):
    result = template.render({
        'class'     :cls,
    })
    output = ''
    if dir is not None:
        output = dir

    output = os.path.join(output, cls.getSubdir())
    if output and not os.path.isdir(output):
        os.makedirs(output)

    filename = cls.name + ".md"
    output = os.path.join(output, filename)

    with open(output,'w') as f:
        f.write(result)
    print("Wrote {}".format(output))

def main():
    env = Environment(loader=FileSystemLoader("."))
    env.filters['replace_mem_address'] = replace_mem_address
    args = parse_args()
    template = env.get_template(args.template)
    context = scene_rdl2.SceneContext()
    context.setProxyModeEnabled(True)

    if args.dir and not os.path.isdir(args.dir):
        os.makedirs(args.dir)

    if args.all:
        context.loadAllSceneClasses()
        for clsname in context.getSceneClassNames():
            cls = context.getSceneClass(clsname)
            obj = context.createSceneObject(clsname,clsname+"_obj")
            scncls = ScnClass(cls,obj)
            generate(scncls,template,args.dir)

    elif args.interface:
        try:
            interface = getattr(scene_rdl2.SceneObjectInterface,
                                args.interface.upper())
        except AttributeError:
            print("Unknown interface: "+args.interface)
            return
        context.loadAllSceneClasses()
        for clsname in context.getSceneClassNames():
            cls = context.getSceneClass(clsname)
            bits = int(cls.getDeclaredInterface())
            if bits & int(interface): 
                obj = context.createSceneObject(clsname,clsname+"_obj")
                generate(ScnClass(cls,obj),template,args.dir)
    elif args.class_name:
        cls = context.createSceneClass(args.class_name)
        obj = context.createSceneObject(args.class_name,args.class_name+"_obj")
        generate(ScnClass(cls,obj),template,args.dir)
    else:
        print("Specify a class name, an interface, or --all.")

    if ScnClass.unorganized_classes:
        print("\nWarning: no rule found for organizing the following classes:")
        for c in ScnClass.unorganized_classes:
            print(c)
        print("\n")

main()
