using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Newtonsoft.Json;
using Payboard.DTO;

namespace Payboard.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TestController : ControllerBase
  {
    private List<UserData> users = new List<UserData>
    {
      new UserData{FullName = "Timur4ik", DateOfBirthUtcTicks = 19 },
      new UserData{FullName = "Mishaa", DateOfBirthUtcTicks = 18}
    };
    private Dictionary<int, string> _test = new Dictionary<int, string>()
    { [1] = "some vaue in dictionary" };

    private List<string> _test2 = new List<string> {
       "Timur4ik", 
       "Mishaa"
    };

    // GET: api/Test
    [HttpGet]
    public IEnumerable<string> Get()
    {
      var values = _test.Values.ToList();
      values.AddRange(_test2);
      return values;
    }

    private List<UserData> GetUsers()
    {
      return users;
    }

    // GET: api/Test/5
    [HttpGet("{id}")]
    public string  Get(int id)
    {
      var users = GetUsers();
      return JsonConvert.SerializeObject(users);
    }

    // POST: api/Test
    [HttpPost]
    public void Post([FromBody] string value)
    {
      _test2.Add(value);
    }

    // PUT: api/Test/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
      _test[id] = value;
    }

    // DELETE: api/Test/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      if (_test.ContainsKey(id))
        _test.Remove(id);
    }
  }
}