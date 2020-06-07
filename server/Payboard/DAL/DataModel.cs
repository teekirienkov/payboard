using AppCommon.Attributes;
using Payboard.DTO;
using Payboard.Database.MySQLRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Payboard.DAL
{
  public class DataModel
  {
    public static List<UserEntry> Users
    {
      get
      {
        var db = new SqlUserRepository();
        return db.GetAll()?.ToList() ?? new List<UserEntry>();
      }
    }

    public static bool User_TryAddNew([NotNull] UserEntry newUser)
    {
      var db = new SqlUserRepository();
      var isUserExist = db.GetAll().Any(o => o.Login == newUser.Login);
      
      if (!isUserExist)
      {
        newUser.CreatedAtUtcTicks = DateTime.UtcNow.Ticks;
        db.Add(newUser);
        return true;
      }
      return false;
    }

    public static UserEntry User_GetByUId(int uid)
    {
      var db = new SqlUserRepository();
      return db.GetByUId(uid);
    }

    public static UserEntry User_GetByLogin(string login)
    {
      var db = new SqlUserRepository();
      return db.GetAll()?.FirstOrDefault(o=> o.Login == login);
    }

    public static bool User_TryUpdateExistUser([NotNull] UserEntry user)
    {
      var db = new SqlUserRepository();
      var isUserExist = db.GetAll().Any(o => o.Login == user.Login);

      if (isUserExist)
      {
        db.Update(user);
        return true;
      }

      return false;
    }
  }
}
