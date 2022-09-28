---
title: OpMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OpMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>clamp</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">if on, the result is clamped to 0 - 1</p>
      
    
    <h3>op1</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the first operand</p>
      
    
    <h3>op1_factor</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">a scalar multiplier on op1</p>
      
    
    <h3>op2</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the second operand</p>
      
    
    <h3>op2_factor</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">a scalar multiplier on op2</p>
      
    
    <h3>operation</h3>
    <b>Int</b>
    <i>enum</i>
      
          | add = 0 (default)
        
          | subtract = 1
        
          | multiply = 2
        
          | divide = 3
        
          | maximum = 4
        
          | minimum = 5
        
          | power = 6
        
          | cross = 7
        
          | dot = 8
        
          | invert op1 = 9
        
          | normalize op1 = 10
        
          | op1 = 11
        
          | op2 = 12
        
          | overlay = 13
        
          | screen = 14
        
          | abs = 15
        
          | ceil = 16
        
          | floor = 17
        
          | modulo = 18
        
          | fraction = 19
        
          | length = 20
        
          | sine = 21
        
          | cosine = 22
        
          | round = 23
        
          | acos = 24
        
          | less_than = 25
        
          | less_than_or_equal = 26
        
          | greater_than = 27
        
          | greater_than_or_equal = 28
        
          | equal = 29
        
          | not equal = 30
        
          | and = 31
        
          | or = 32
        
          | not = 33
        
          | xor = 34
        
          | bit_shift_left = 35
        
          | bit_shift_right = 36
        
          | bitwise_and = 37
        
          | bitwise_or = 38
        
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>

