using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft;
using event_log.Models;
using System;

namespace event_log
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            // see if we have an environment variable
            string DATABASE_URL = Environment.GetEnvironmentVariable("DATABASE_URL_STR");
            Console.WriteLine($"--- DATABASE_URL: {DATABASE_URL} --- ");

            string connectionString = (DATABASE_URL == null ? Configuration.GetConnectionString("DefaultConnection") : DATABASE_URL);
            Console.WriteLine($"Using connection string: {connectionString}");


            Console.WriteLine("--- the fuck --- " + services.AddDbContext<ApplicationContext>(options =>
                            options.UseNpgsql(connectionString)
                        ));

            services.AddDbContext<ApplicationContext>(options =>
                options.UseNpgsql(connectionString)
            );
            Console.WriteLine($"-- end the fuck -- ");


            System.Console.WriteLine("--- and here --- " + services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            Console.WriteLine($"-- end here -- ");


            // --- LOOK INTO THIS --- this is not running and program skipped over it --- // 

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                System.Console.WriteLine(" we get inside of AddSpaStaticFiles ");
                configuration.RootPath = "ClientApp/build";
                System.Console.WriteLine(" we exit ");
            });

            Console.WriteLine($"-- end whattabout this -- ");
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }


            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

        }
    }
}
