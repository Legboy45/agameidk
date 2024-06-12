namespace SpriteKind {
    export const HUD = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const BG = SpriteKind.create()
    export const TileMapPlayer = SpriteKind.create()
}
namespace StatusBarKind {
    export const ReloadTime = StatusBarKind.create()
}
function tilemapguyanimation () {
    characterAnimations.loopFrames(
    TileMapGuy,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    TileMapGuy,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    TileMapGuy,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    TileMapGuy,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    TileMapGuy,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    TileMapGuy,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    TileMapGuy,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    TileMapGuy,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
scene.onOverlapTile(SpriteKind.TileMapPlayer, assets.tile`myTile`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile0`)
        GeneratorsOn += 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(UsingMonitor)) {
        if (!(Reloading) && (!(Ammo == MaxAmmo) && Magazines != 0)) {
            Reloading = true
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(UsingMonitor)) {
        if (!(Reloading)) {
            if (Ammo > 0) {
                if (!(Theothersprite == Dummy)) {
                    if (PistolAim.overlapsWith(Theothersprite)) {
                        PistolAim.setImage(img`
                            .........................
                            .........................
                            .....55...........55.....
                            ...55...............55...
                            ...5.................5...
                            ..5...................5..
                            ..5...................5..
                            .........................
                            .........................
                            ...........555...........
                            ...........555...........
                            .........5555555.........
                            .........5555555.........
                            ...........555...........
                            ...........555...........
                            .........................
                            .........................
                            ..5...................5..
                            ..5...................5..
                            ...5.................5...
                            ...55...............55...
                            .....55...........55.....
                            .........................
                            .........................
                            `)
                        animation.runImageAnimation(
                        PistolHUD,
                        [img`
                            ........................
                            ........................
                            ........................
                            ........................
                            ......4.................
                            ....4fffff..............
                            ....fbbbbbf.............
                            ....fbbbbbbf............
                            ...4fbbbbbbbff..........
                            ....fbbbbbbbbbf.........
                            ....fbbbbbbbbbbf........
                            .....fbbbbbbbbbbff......
                            ......ffbbbbbbbbbbf.....
                            ........fbbbbbbbbbbf....
                            .........fbbbbbbbbbbff..
                            ..........fbbbbbbbbbbbf.
                            ...........ffbbbbbbbbbf.
                            ...........f.fbbbbbbbbf.
                            ...........f..fbbbbbbbf.
                            ...........f..fffbbbbf..
                            ............fffccffff...
                            .............fccccccf...
                            .............fccccccf...
                            ............fccccccf....
                            `,img`
                            ........................
                            ........................
                            ........................
                            ..4444..................
                            ..45544.................
                            ..455fffff..............
                            ..45fbbbbbf.............
                            ..44fbbbbbbf............
                            ....fbbbbbbbff..........
                            ....fbbbbbbbbbf.........
                            ....fbbbbbbbbbbf........
                            .....fbbbbbbbbbbff......
                            ......ffbbbbbbbbbbf.....
                            ........fbbbbbbbbbbf....
                            .........fbbbbbbbbbbff..
                            ..........fbbbbbbbbbbbf.
                            ...........ffbbbbbbbbbf.
                            ...........f.fbbbbbbbbf.
                            ...........f..fbbbbbbbf.
                            ...........f..fffbbbbf..
                            ............fffccffff...
                            .............fccccccf...
                            .............fccccccf...
                            ............fccccccf....
                            `,img`
                            ..4444..................
                            .44554..................
                            445554..................
                            4455544.................
                            44555554................
                            45555fffff..............
                            4555fbbbbbf.............
                            4445fbbbbbbf............
                            ..44fbbbbbbbff..........
                            ....fbbbbbbbbbf.........
                            ....fbbbbbbbbbbf........
                            .....fbbbbbbbbbbff......
                            ......ffbbbbbbbbbbf.....
                            ........fbbbbbbbbbbf....
                            .........fbbbbbbbbbbff..
                            ..........fbbbbbbbbbbbf.
                            ...........ffbbbbbbbbbf.
                            ...........f.fbbbbbbbbf.
                            ...........f..fbbbbbbbf.
                            ...........f..fffbbbbf..
                            ............fffccffff...
                            .............fccccccf...
                            .............fccccccf...
                            ............fccccccf....
                            `,img`
                            ........................
                            ........................
                            ........................
                            ..444...................
                            ..45444.................
                            ..445fffff..............
                            ...4fbbbbbf.............
                            ...4fbbbbbbf............
                            ....fbbbbbbbff..........
                            ....fbbbbbbbbbf.........
                            ....fbbbbbbbbbbf........
                            .....fbbbbbbbbbbff......
                            ......ffbbbbbbbbbbf.....
                            ........fbbbbbbbbbbf....
                            .........fbbbbbbbbbbff..
                            ..........fbbbbbbbbbbbf.
                            ...........ffbbbbbbbbbf.
                            ...........f.fbbbbbbbbf.
                            ...........f..fbbbbbbbf.
                            ...........f..fffbbbbf..
                            ............fffccffff...
                            .............fccccccf...
                            .............fccccccf...
                            ............fccccccf....
                            `,img`
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            .....fffff..............
                            ....fbbbbbf.............
                            ....fbbbbbbf............
                            ....fbbbbbbbff..........
                            ....fbbbbbbbbbf.........
                            ....fbbbbbbbbbbf........
                            .....fbbbbbbbbbbff......
                            ......ffbbbbbbbbbbf.....
                            ........fbbbbbbbbbbf....
                            .........fbbbbbbbbbbff..
                            ..........fbbbbbbbbbbbf.
                            ...........ffbbbbbbbbbf.
                            ...........f.fbbbbbbbbf.
                            ...........f..fbbbbbbbf.
                            ...........f..fffbbbbf..
                            ............fffccffff...
                            .............fccccccf...
                            .............fccccccf...
                            ............fccccccf....
                            `],
                        75,
                        false
                        )
                        timer.after(400, function () {
                            PistolAim.setImage(img`
                                .........................
                                .........................
                                .....ee...........ee.....
                                ...ee...............ee...
                                ...e.................e...
                                ..e...................e..
                                ..e...................e..
                                .........................
                                .........................
                                ...........eee...........
                                ...........eee...........
                                .........eeeeeee.........
                                .........eeeeeee.........
                                ...........eee...........
                                ...........eee...........
                                .........................
                                .........................
                                ..e...................e..
                                ..e...................e..
                                ...e.................e...
                                ...ee...............ee...
                                .....ee...........ee.....
                                .........................
                                .........................
                                `)
                        })
                        sprites.destroy(Theothersprite)
                        Ammo += -1
                    }
                }
            }
        }
    }
})
function TileMapcreate () {
    tiles.setCurrentTilemap(tilemap`level2`)
    TileMapGuy = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.TileMapPlayer)
    scene.cameraFollowSprite(TileMapGuy)
    tiles.placeOnRandomTile(TileMapGuy, sprites.castle.tileDarkGrass1)
    tilemapguyanimation()
}
function createHUD () {
    ReloadTime = statusbars.create(25, 4, StatusBarKind.ReloadTime)
    ReloadTime.setFlag(SpriteFlag.Invisible, true)
    ReloadTime.setFlag(SpriteFlag.RelativeToCamera, true)
    ReloadTime.z = 5
    ReloadTime.setColor(5, 4)
    ReloadTime.setBarBorder(1, 15)
    ReloadTime.value = 0
    MonitorHUD = sprites.create(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ddbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcc
        ddbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcc
        ddbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbfff................................................................................................................................................fffbbbcc
        ddbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcc
        ddbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcc
        ddbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcc
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `, SpriteKind.HUD)
    MonitorHUD.setFlag(SpriteFlag.Invisible, true)
    MonitorHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    MonitorHUD.setPosition(80, 60)
    BulletHUD = sprites.create(img`
        ................................
        f...............................
        fffffffffffffffffffffffffffff...
        f4f55555555555555555555555555f..
        f4f555555555555555555555555555f.
        f4f555555555555555555555555555f.
        f4f5555555555555555555555555555f
        f4f5555555555555555555555555555f
        f4f5555555555555555555555555555f
        f4f5555555555555555555555555555f
        f4f555555555555555555555555555f.
        f4f555555555555555555555555555f.
        f4f55555555555555555555555555f..
        fffffffffffffffffffffffffffff...
        f...............................
        ................................
        `, SpriteKind.HUD)
    BulletHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    BulletHUD.z = 5
    BulletHUD.setPosition(20, 105)
    AmmoTextVar = textsprite.create("0")
    AmmoTextVar.setOutline(1, 15)
    AmmoTextVar.z = 5
    AmmoTextVar.setFlag(SpriteFlag.RelativeToCamera, true)
    AmmoTextVar.setPosition(12, 105)
    MagsTextVar = textsprite.create("0")
    MagsTextVar.setOutline(1, 15)
    MagsTextVar.z = 5
    MagsTextVar.setFlag(SpriteFlag.RelativeToCamera, true)
    MagsTextVar.setPosition(12, 92)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(UsingMonitor)) {
        UsingMonitor = true
    } else {
        UsingMonitor = false
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    if (!(UsingMonitor)) {
        Theothersprite = otherSprite
    }
})
function PlrCreate () {
    Background = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffff
        fffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffff
        ffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffff
        fffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffff
        fffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffff
        ffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffff
        ffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffff
        ffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
        fffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff
        fffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccc
        cccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        ccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccc
        cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccc
        cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
        ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
        cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc
        ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccc
        ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc
        cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
        ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
        cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
        `, SpriteKind.BG)
    Background.setFlag(SpriteFlag.Invisible, false)
    Background.setFlag(SpriteFlag.RelativeToCamera, true)
    Background.setPosition(80, 60)
    Background.z = 2
    Dummy = sprites.create(img`
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        `, SpriteKind.Enemy2)
    Dummy.setFlag(SpriteFlag.Invisible, true)
    Dummy.setPosition(80, 120)
    PistolAim = sprites.create(img`
        .........................
        .........................
        .....ee...........ee.....
        ...ee...............ee...
        ...e.................e...
        ..e...................e..
        ..e...................e..
        .........................
        .........................
        ...........eee...........
        ...........eee...........
        .........eeeeeee.........
        .........eeeeeee.........
        ...........eee...........
        ...........eee...........
        .........................
        .........................
        ..e...................e..
        ..e...................e..
        ...e.................e...
        ...ee...............ee...
        .....ee...........ee.....
        .........................
        .........................
        `, SpriteKind.Player)
    PistolAim.setFlag(SpriteFlag.GhostThroughTiles, true)
    PistolAim.setFlag(SpriteFlag.GhostThroughWalls, true)
    PistolAim.z = 5
    PistolAim.setPosition(80, 120)
    PistolHUD = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        .....fffff..............
        ....fbbbbbf.............
        ....fbbbbbbf............
        ....fbbbbbbbff..........
        ....fbbbbbbbbbf.........
        ....fbbbbbbbbbbf........
        .....fbbbbbbbbbbff......
        ......ffbbbbbbbbbbf.....
        ........fbbbbbbbbbbf....
        .........fbbbbbbbbbbff..
        ..........fbbbbbbbbbbbf.
        ...........ffbbbbbbbbbf.
        ...........f.fbbbbbbbbf.
        ...........f..fbbbbbbbf.
        ...........f..fffbbbbf..
        ............fffccffff...
        .............fccccccf...
        .............fccccccf...
        ............fccccccf....
        `, SpriteKind.HUD)
    PistolHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    PistolHUD.scale = 2
    PistolHUD.z = 5
    PistolHUD.setPosition(118, 98)
    Camerafornonmonitor = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HUD)
    Camerafornonmonitor.setFlag(SpriteFlag.Ghost, true)
    Camerafornonmonitor.setFlag(SpriteFlag.RelativeToCamera, true)
    Camerafornonmonitor.setPosition(80, 120)
}
function Variables () {
    EnergyVar = 0
    GeneratorsOn = 0
    Timeuntilspawning = 8
    enemyspawnin = 3500
    Magazines = 1
    MaxAmmo = 5
    Ammo = 5
    UsingMonitor = false
    Reloading = false
    ReloadTimeMax = 100
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(UsingMonitor)) {
        Theothersprite = otherSprite
    }
})
let myEnemy: Sprite = null
let ReloadTimeMax = 0
let enemyspawnin = 0
let Timeuntilspawning = 0
let EnergyVar = 0
let Camerafornonmonitor: Sprite = null
let Background: Sprite = null
let MagsTextVar: TextSprite = null
let AmmoTextVar: TextSprite = null
let BulletHUD: Sprite = null
let MonitorHUD: Sprite = null
let ReloadTime: StatusBarSprite = null
let PistolHUD: Sprite = null
let PistolAim: Sprite = null
let Dummy: Sprite = null
let Theothersprite: Sprite = null
let Magazines = 0
let MaxAmmo = 0
let Ammo = 0
let Reloading = false
let UsingMonitor = false
let GeneratorsOn = 0
let TileMapGuy: Sprite = null
Variables()
PlrCreate()
createHUD()
TileMapcreate()
game.onUpdate(function () {
    if (Timeuntilspawning == 0) {
        enemyspawnin = 1000
    } else {
        timer.throttle("spawn time", 1000, function () {
            Timeuntilspawning += -1
        })
    }
})
game.onUpdate(function () {
    if (!(UsingMonitor)) {
        scene.cameraFollowSprite(Camerafornonmonitor)
        controller.moveSprite(PistolAim, 125, 0)
        controller.moveSprite(TileMapGuy, 0, 0)
    } else {
        scene.cameraFollowSprite(TileMapGuy)
        controller.moveSprite(PistolAim, 0, 0)
        controller.moveSprite(TileMapGuy, 100, 100)
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.scale += 0.01
        if (value.scale == 6) {
            game.gameOver(false)
        }
        pause(10)
    }
})
game.onUpdate(function () {
    if (!(UsingMonitor)) {
        if (Reloading) {
            ReloadTime.setFlag(SpriteFlag.Invisible, false)
            if (ReloadTime.value == ReloadTimeMax) {
                Reloading = false
                ReloadTime.value = 0
                Ammo = 5
                Magazines += -1
            } else {
                ReloadTime.value += 1
            }
        } else {
            ReloadTime.setFlag(SpriteFlag.Invisible, true)
        }
    }
})
game.onUpdate(function () {
    ReloadTime.setPosition(PistolAim.x, PistolAim.y - 45)
    AmmoTextVar.setText("Ammo " + ":" + convertToText(Ammo))
    MagsTextVar.setText("Mags " + ":" + convertToText(Magazines))
})
game.onUpdate(function () {
    if (UsingMonitor) {
        Background.setFlag(SpriteFlag.Invisible, true)
        ReloadTime.setFlag(SpriteFlag.Invisible, true)
        PistolHUD.setFlag(SpriteFlag.Invisible, true)
        PistolAim.setFlag(SpriteFlag.Invisible, true)
        BulletHUD.setFlag(SpriteFlag.Invisible, true)
        MagsTextVar.setFlag(SpriteFlag.Invisible, true)
        AmmoTextVar.setFlag(SpriteFlag.Invisible, true)
        MonitorHUD.setFlag(SpriteFlag.Invisible, false)
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.setFlag(SpriteFlag.Invisible, true)
        }
    } else {
        Background.setFlag(SpriteFlag.Invisible, false)
        ReloadTime.setFlag(SpriteFlag.Invisible, false)
        PistolHUD.setFlag(SpriteFlag.Invisible, false)
        PistolAim.setFlag(SpriteFlag.Invisible, false)
        BulletHUD.setFlag(SpriteFlag.Invisible, false)
        MagsTextVar.setFlag(SpriteFlag.Invisible, false)
        AmmoTextVar.setFlag(SpriteFlag.Invisible, false)
        MonitorHUD.setFlag(SpriteFlag.Invisible, true)
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.setFlag(SpriteFlag.Invisible, false)
        }
    }
})
game.onUpdateInterval(randint(enemyspawnin, 15000), function () {
    myEnemy = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 f f f f . 
        . . f f f c d b 1 b c 1 1 1 c f 
        f c 1 1 1 c b f b f 1 b 1 b 1 f 
        f 1 b 1 b 1 f f f f b f b f b f 
        f b f b f f f f f f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . f f f f 1 1 1 1 1 1 b f . . . 
        f c 1 1 1 c d b 1 b d f f f . . 
        f 1 b 1 b c b f b f c 1 1 1 c f 
        f b f b f b f f f f 1 b 1 b 1 f 
        . . . . . f f f f f f f b f b f 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    200,
    true
    )
    myEnemy.z = 3
    myEnemy.setPosition(randint(0, scene.screenWidth()), 120)
})
