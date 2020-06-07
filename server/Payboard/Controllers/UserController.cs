using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Payboard.DAL;
using Payboard.DataConvertion;
using Payboard.DTO;

namespace Payboard.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    // GET: api/User
    [HttpGet]
    public IEnumerable<string> GetAllLogins()
    {
      return DataModel.Users.Select(o => o.Login);
    }

    // GET: api/User/5
    [HttpGet("{id}", Name = "GetById")]
    public UserData GetById(int id)
    {
      return UserConvertor.ToUserDataSafely(DataModel.User_GetByUId(id));
    }

    [HttpGet("{id}", Name = "GetShortById")]
    public UserData GetShortById(int id)
    {
      return UserConvertor.ToUserDataShort(DataModel.User_GetByUId(id));
    }// GET: api/User/5

    [HttpGet("{login}", Name = "GetByLogin")]
    public UserData GetByLogin(string login)
    {
      return UserConvertor.ToUserDataSafely(DataModel.User_GetByLogin(login));
    }

    [HttpGet("{login}", Name = "GetShortByLogin")]
    public UserData GetShortByLogin(string login)
    {
      return UserConvertor.ToUserDataSafely(DataModel.User_GetByLogin(login));
    }

    // POST: api/User
    [HttpPost]
    public void CreateUser([FromBody] UserData newUser)
    {
      DataModel.User_TryAddNew(UserConvertor.ToUserEntry(newUser));
    }

    // PUT: api/User/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
