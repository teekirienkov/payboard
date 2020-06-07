using Payboard.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Payboard.DataConvertion
{
  public static class UserConvertor
  {
    public static UserData ToUserData(UserEntry userEntry)
    {
      return new UserData
      {
        UId                 = userEntry.UId                 ,
        FullName            = userEntry.FullName            ,
        UserName            = userEntry.UserName            ,
        DateOfBirthUtcTicks = userEntry.DateOfBirthUtcTicks ,
        Email               = userEntry.Email               ,
        PhoneNumber         = userEntry.PhoneNumber         ,
        Login               = userEntry.Login               ,
        Password            = userEntry.Password            ,
        Avatar              = userEntry.Avatar              ,
        ProfileHead         = userEntry.ProfileHead         ,
        Description         = userEntry.Description 
      };
    }
  
    public static UserData ToUserDataSafely(UserEntry userEntry)
    {
      return new UserData
      {
        UId                 = userEntry.UId                 ,
        FullName            = userEntry.FullName            ,
        UserName            = userEntry.UserName            ,
        DateOfBirthUtcTicks = userEntry.DateOfBirthUtcTicks ,
        Login               = userEntry.Login               ,
        Avatar              = userEntry.Avatar              ,
        ProfileHead         = userEntry.ProfileHead         ,
        Description         = userEntry.Description 
      };
    }

    public static UserData ToUserDataShort(UserEntry userEntry)
    {
      return new UserData
      {
        UId                 = userEntry.UId                 ,
        FullName            = userEntry.FullName            ,
        UserName            = userEntry.UserName            ,
        DateOfBirthUtcTicks = userEntry.DateOfBirthUtcTicks ,
        Login               = userEntry.Login               ,
        ProfileHead         = userEntry.ProfileHead         ,
      };
    }

    public static UserEntry ToUserEntry(UserData userData)
    {
      return new UserEntry
      {
        UId                 = userData.UId                 ,
        FullName            = userData.FullName            ,
        UserName            = userData.UserName            ,
        DateOfBirthUtcTicks = userData.DateOfBirthUtcTicks ,
        Email               = userData.Email               ,
        PhoneNumber         = userData.PhoneNumber         ,
        Login               = userData.Login               ,
        Password            = userData.Password            ,
        Avatar              = userData.Avatar              ,
        ProfileHead         = userData.ProfileHead         ,
        Description         = userData.Description 
      };
    }
  }

  public enum FilterFields
  {
    UId         = 1     ,
    FullName    = 2     ,
    UserName    = 4     ,
    Email       = 8     ,
    PhoneNumber = 16    ,
    Login       = 32    ,
    Password    = 64    ,
    Avatar      = 128   ,
    ProfileHead = 256   ,
    Description = 512
  }
}
