﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SingletonThreadSafety
{
    public class Computer
    {
        public OS OS { get; set; }

        public void Launch(string osName)
        {
            OS = OS.getInstance(osName);
        }
    }
}
