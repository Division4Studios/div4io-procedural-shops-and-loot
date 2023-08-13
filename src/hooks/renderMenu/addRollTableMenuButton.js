export function addRollTableMenuButton(app, html) {
  if (app.options.id == "tables" && game.user.isGM) {
    let button = $("<div class='header-actions action-buttons flexrow'><button class='ddb-muncher'><i class='fas fa-th-list'></i> Generate Tables </button></div>");

    $(html).find(".directory-header").append(button);
  }
}