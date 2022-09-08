Randy testing


##### To create a code snippet with C++ style formatting 

~~~ c++
void
debugPrintThreadID(const char *contextString)
{
    if (!contextString) contextString = "-- Thread ID = ";
    pid_t tid = syscall(SYS_gettid);

    // This printing is thread safe.
    std::printf("%s%d\n", contextString, tid);
    std::fflush(stdout);
}
~~~
