const house = {
    "rooms": {
        "Entry": {
            "background": {
                "source": "assets/images/QCKielyHall.jpg",
                "loop": false,
                "type": "picture",
                "rotation": [0,-90,0]
            },
            "adjacentRooms": ["QCKeilyHall3"],
            "interactions": [
                {
                    "whereTo": "QCKeilyHall3",
                    "type": "Nav",
                    "location": [-0.1, 1.4, -3], //[x, y, z],
                    "rotation": [0, 0, 90], //[x, y, z],
                    "width": "0.7",
                    "height": "0.7",
                    "distance": 1,
                    "originalRoom": "Entry",
                    "id": 1789
                },
                {
                    "whereTo": "Entry",
                    "type": "Picture",
                    "location": [35, 5, -3], //[x, y, z],
                    "rotation": [0, -45, 0], //[x, y, z],
                    "distance": 0,
                    "originalRoom": "Entry",
                    "id": 2,
                    "width": "5",
                    "height": "5",
                    "display" : {
                      "type": "Image",
                      "source": "/assets/images/TestImage.jpg",
                      "text": "testing testing 123",
                    }
                },
            ],
        },

        "QCKeilyHall3": {
            "background": {
                "source": "assets/images/QCKeilyHall3.jpg",
                "loop": false,
                "type": "picture",
                "rotation": [0,-90,0]
            },
        }


    }
}