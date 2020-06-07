using AppCommon.Attributes;
using Microsoft.EntityFrameworkCore;
using Payboard.DTO;
using Payboard.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Payboard.Context
{
  [ProvidesContext]
  public class AppDBContext : DbContext
  {
    public DbSet<UserEntry> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlServer(Configurator.SqlConnectionString);
    }
  }
}
