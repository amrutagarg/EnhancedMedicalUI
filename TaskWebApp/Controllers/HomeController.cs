using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TaskWebApp.Controllers
{
    public class HomeController : Controller
    {
        protected readonly DBContext.s_testEntities UserDB = new DBContext.s_testEntities();
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        
    }
}
