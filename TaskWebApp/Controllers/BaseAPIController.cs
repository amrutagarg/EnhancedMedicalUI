using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Newtonsoft.Json;

namespace TaskWebApp.Controllers
{
    public class BaseAPIController : ApiController
    {
        protected readonly DBContext.s_testEntities UserDB = new DBContext.s_testEntities();
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var responce = Request.CreateResponse(HttpStatusCode.OK);
            responce.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return responce;
        }
    }
}
