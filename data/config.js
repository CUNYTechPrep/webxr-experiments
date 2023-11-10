const house = {
    "rooms": {
        "Entry": {
            "background": {
                "source": "assets/images/HunterCampus.jpg",
                "loop": false,
                "type": "picture",
                "rotation": [0,-90,0]
            },
            "adjacentRooms": ["HunterCampus2"],
            "interactions": [
                {
                    "whereTo": "HunterCampus2",
                    "type": "Nav",
                    "location": [-0.5, 1.4, -3], //[x, y, z],
                    "rotation": [0, 0, 90], //[x, y, z],
                    "width": "0.7",
                    "height": "1",
                    "distance": 1,
                    "originalRoom": "Entry",
                    "id": 1789
                },
            ],
        },
        
        "HunterCampus2": {
            "background": {
                "source": "assets/images/HunterCampus2.jpg",
                "loop": false,
                "type": "picture",
                "rotation": [0,-90,0]
            },
        }
    }
}