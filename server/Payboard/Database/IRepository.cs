using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Payboard.Database
{
  internal interface IRepository<T> : IDisposable where T :class
  {
    IEnumerable<T> GetAll();
    T GetByUId(int uid);
    void Add(T o);
    void Update(T o);
    void Delete(int uid);
    /// <returns>new UId</returns>
    int Save();
  }
}
