AFRAME.registerComponent('room', {
  init: function () {
    var buttonEls = this.buttonEls = this.el.querySelectorAll('.nav-button');
    this.onClick = this.onClick.bind(this);
    this.setEnvironment = this.setEnvironment.bind(this);
    this.setBackground = this.setBackground.bind(this);
    this.setInteractions = this.setInteractions.bind(this);
    this.reset = this.reset.bind(this);

    this.data.room = "Entry";

    this.setEnvironment();
  },

    onClick: function (interaction) {
        // console.log(interaction)
        if(interaction.type.toLowerCase() === 'nav'){
        console.log("change background to: ", interaction);
        const { rooms } = house;
        this.reset();
        this.data.room = interaction.whereTo;
        this.setEnvironment();

        const { source, text } = interaction.display;
        const modal = document.createElement("a-entity");
        modal.setAttribute('id', 'modal');
        modal.setAttribute('position', {x: 0, y: 1.6, z: -2.5});
        modal.innerHTML = `
        <a-image position="0 0.4 0" src="${source}" width="3" height="3"></a-image>
        <a-entity mixin="text" text="value: ${text}; color: black; width: 2.3;"></a-entity>`;
        let parent = document.getElementById("parent");
        parent.appendChild(modal);
            }
    },

    setEnvironment: function(){
        const { rooms } = house;
        this.setBackground(rooms[`${this.data.room}`].background);
        this.setInteractions(rooms[`${this.data.room}`].interactions);
      },

    setBackground: function(background){
        if(background.type.toLowerCase() === 'picture'){
            console.log("setting img background")
            const imgBackground = document.createElement("a-sky");
            imgBackground.setAttribute('src', background.source);
            imgBackground.setAttribute('shader', "flat");
            imgBackground.setAttribute('rotation', "0 0 0");
            let parent = document.getElementById("parent");
            parent.appendChild(imgBackground);
        }
    },

    
    setInteractions: function(interactions){
    // console.log(interactions);
        interactions.forEach(interaction => {
            // if(interaction.type.toLowerCase() === "nav"){
            const entity = document.createElement("a-entity");
            entity.setAttribute('position', interaction.location.join(" "));
            // if(interaction.id === 1789){
                // console.log("seeting rotation")
                entity.setAttribute('rotation', interaction.rotation.join(" "));
            // }
            entity.innerHTML = `
            <a-entity class="room-attribute">
                <a-entity class="raycastable nav-button" mixin="interactions">
                <a-image src="${interaction.type.toLowerCase() === "nav" ? '#nav' : '#bow'}" width="${interaction.width}" height="${interaction.height}"></a-image>
                </a-entity>
            </a-entity>
            `;
            let parent = document.getElementById("parent");
            parent.appendChild(entity);
            entity.addEventListener('click', ()=> {
                this.onClick(interaction)
            });
        });
    },

    reset: function(){
        if(document.querySelector("a-sky")){
          console.log("remove img background");
          document.querySelector("a-sky").remove();
        }
        if(document.querySelector("a-videosphere")){
          document.querySelector("a-videosphere").remove();
        } 
        if(document.getElementById("modal")){
          document.getElementById("modal").remove();
        } 
        document.querySelectorAll('.room-attribute').forEach(e => e.remove());
    },
});