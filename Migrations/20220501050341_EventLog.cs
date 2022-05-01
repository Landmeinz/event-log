using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace event_log.Migrations
{
    public partial class EventLog : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EventLog",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    eventName = table.Column<string>(type: "varchar(250)", nullable: false),
                    eventLocation = table.Column<string>(type: "varchar(250)", nullable: false),
                    eventNotes = table.Column<string>(type: "varchar(250)", nullable: false),
                    rating = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventLog", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventLog");
        }
    }
}
