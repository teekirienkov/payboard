using AppCommon.Attributes;
using Payboard.DTO;
using Payboard.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Payboard.Database.MySQLRepository
{
  public class SqlUserRepository : IRepository<UserEntry>
  {
    private AppDBContext _context;
    private int uidToSearch;

    public SqlUserRepository()
    {
      _context = new AppDBContext();
    }

    public void Add([NotNull] UserEntry o)
    {
      _context.Users.Add(o);
    }

    public void Delete([NotNull] int uid)
    {
      uidToSearch = uid;
      var v = GetByUid();

      if (v != null)
        _context.Users.Remove(v);
    }

    [CanBeNull]
    public IEnumerable<UserEntry> GetAll()
    {
      return _context.Users;
    }

    [CanBeNull]
    public UserEntry GetByUId([NotNull] int uid)
    {
      uidToSearch = uid;
      return GetByUid();
    }

    [CanBeNull]
    public int Save()
    {
      _context.SaveChanges();
      return GetLastId();
    }

    public void Update([NotNull] UserEntry o)
    {
      _context.Users.Update(o).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
    }

    public void Dispose()
    {
      _context.Dispose();
      GC.SuppressFinalize(this);
    }

    //Helpers

    [CanBeNull]
    private UserEntry GetByUid()
    {
      return _context.Users.FirstOrDefault(o => o.UId == uidToSearch);
    }

    [CanBeNull]
    private UserEntry GetLast()
    {
      return _context.Users.OrderByDescending(v => v.UId).FirstOrDefault();
    }

    private int GetLastId()
    {
      return _context.Users.OrderByDescending(v => v.UId).FirstOrDefault()?.UId ?? 0;
    }
  }
}
