using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaskWebApp.DBContext;

namespace TaskWebApp.Controllers
{
    public class UserController : BaseAPIController
    {
      
        [Route("api/UserAPI/getList")]
        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.contactus.AsEnumerable());
        }

        [Route("api/UserAPI/AddUser")]
        public HttpResponseMessage Post([FromBody]contactu value)
        {
            UserDB.contactus.Add(value);
            return ToJson(UserDB.SaveChanges());
        }

        [Route("api/UserAPI/RegisterUser")]
        public HttpResponseMessage RegisterUser([FromBody]user value)
        {
            UserDB.users.Add(value);
            return ToJson(UserDB.SaveChanges());
        }

        [HttpPost]
        [Route("api/UserAPI/Login")]
        public HttpResponseMessage Login([FromBody]user value)
        {
            var data = UserDB.users.Where(a => a.username == value.username && a.password == value.password).SingleOrDefault();
            //return json data
            return ToJson(data);
        }
    }
}
