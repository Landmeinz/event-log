﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using event_log.Models;

#nullable disable

namespace event_log.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20220501050341_EventLog")]
    partial class EventLog
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("event_log.Models.EventLog", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<string>("eventLocation")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("eventName")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("eventNotes")
                        .IsRequired()
                        .HasColumnType("varchar(2500)");

                    b.Property<int>("rating")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("EventLog");
                });
#pragma warning restore 612, 618
        }
    }
}
