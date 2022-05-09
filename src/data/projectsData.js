import ItchIcon from "../images/itch.png"
import LinkIcon from "../images/link.png"

let projects = [
    {
        name: "STACC",
        route: "stacc",
        desc: "STACC is a 2D puzzle game made in Godot Engine 3 for GMTK Game Jam 2021. The players have to complete each level by moving around the tiles. Each time the player moves, their movement is recorded into a list, with maximum of three recordings. If the list is full, the player cannot move and must free the list first. By freeing the list, the character will also move the recorded movements as well.",
        link: "https://arsith.itch.io/stacc",
        linkIcon: ItchIcon,
        callForAction: "Play on Itch.io",
    },
    {
        name: "Deep Dive",
        route: "deep-dive",
        desc: "Deep Dive is a 2D platformer game made in Godot Engine 3 for Ludum Dare 48. The players have to exit an underwater dungeon with a treasure carried on top of the character's head. Whenever the character carries the treasure, the character sinks with it. However, whenever they're not, the character floats to the surface of the water.",
        link: "https://arsith.itch.io/deep-dive",
        linkIcon: ItchIcon,
        callForAction: "Play on Itch.io",
    },
    {
        name: "The Voice",
        route: "the-voice",
        desc: "The Voice is a turn based game made in Godot Engine 3 for GMTK Game Jam 2020. The players must compete in a tournament with the character. However, the character might neglect the player's intention and perform a different action instead. In order to be on sync, the player must maintain a good relationship with the character.",
        link: "https://arsith.itch.io/the-voice",
        linkIcon: ItchIcon,
        callForAction: "Play on Itch.io",
    },
]

let webAndApps = [
    {
        name: "Animeet",
        route: "animeet",
        desc: "The Voice is a turn based game made in Godot Engine 3 for GMTK Game Jam 2020. The players must compete in a tournament with the character. However, the character might neglect the player's intention and perform a different action instead. In order to be on sync, the player must maintain a good relationship with the character.",
        link: "https://animeet-nine.vercel.app/",
        linkIcon: LinkIcon,
        callForAction: "Open webpage",
    },
]

let publications = [
    {
        name: "Test",
        route: "test",
        desc: "The Voice is a turn based game made in Godot Engine 3 for GMTK Game Jam 2020. The players must compete in a tournament with the character. However, the character might neglect the player's intention and perform a different action instead. In order to be on sync, the player must maintain a good relationship with the character.",
        link: "https://ieeexplore.ieee.org/abstract/document/8782484?casa_token=FLwZEgHFbB8AAAAA:W9mv5s2AxZlcbYljq4o8cKIDMKvX1Lvxtly6RO9pQuiNgw7z4V0sRbET9DFPNrzxl_WbfV_o",
        linkIcon: LinkIcon,
        callForAction: "Open page",
    },
]

export const getProjects = () => {
    return projects
}

export const getProject = (route) => {
    return projects.find(
        project => project.route === route
    )
}

export const getWebAndApps = () => {
    return webAndApps
}

export const getWebAndApp = (route) => {
    return webAndApps.find(
        web => web.route === route
    )
}

export const getPublications = () => {
    return publications
}

export const getPublication = (route) => {
    return publications.find(
        publication => publication.route === route
    )
}