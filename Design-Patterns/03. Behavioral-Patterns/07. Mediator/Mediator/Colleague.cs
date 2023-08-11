﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mediator
{
    public abstract class Colleague
    {
        protected Mediator mediator;

        public Colleague(Mediator _mediator)
        {
            mediator = _mediator;
        }
    }
}
