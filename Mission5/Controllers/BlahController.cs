using Microsoft.AspNetCore.Mvc;
using MyFirstASPWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPWebApp.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalcView()
        {
            return View();
        }
        
        [HttpPost]
        public IActionResult GradeCalcView (Class model)
        {
            return View();
        }
    }
}
