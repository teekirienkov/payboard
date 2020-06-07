using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Payboard.DTO
{
  public class UserData
  {
    public int UId                  { get; set; }
    public string FullName          { get; set; }
    public string UserName          { get; set; }
    public long DateOfBirthUtcTicks { get; set; }

    public string Email             { get; set; }
    public string PhoneNumber       { get; set; }

    public string Login             { get; set; }
    public string Password          { get; set; }

    public byte[] Avatar            { get; set; }
    public string ProfileHead       { get; set; }
    public string Description       { get; set; }

    /// <summary>
    /// UtcTicks at which the user was created
    /// </summary>
    public long CreatedAtUtcTicks   { get; set; }
  }
}
