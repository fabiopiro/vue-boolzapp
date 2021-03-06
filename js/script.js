var app = new Vue (
    {
        el:"#app",
        data: {
            // contacts
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },     
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],

            activeContact: 0,

            currentMessage: "",

            search: "",

        },
        methods: {
            
            getLastMessage: function(contact) {
                return contact.messages[contact.messages.length-1];
            },

            getContact: function(index) {
                this.activeContact = index;
            },
        
            getLastAcces: function(index) {
                const lastMessage = this.contacts[index].messages;

                return lastMessage[lastMessage.length - 1].date;
            },

            getContactAvatar: function(index) {
                return `img/avatar${this.contacts[index].avatar}.jpg`
            },

            sendMessage: function() {

                if (this.currentMessage.trim().length > 0) {

                    this.contacts[this.activeContact].messages.push({
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: this.currentMessage,
                        status: "sent",
                    });

                    this.currentMessage = "";

                    // RISPOSTA
                    
                    setTimeout(this.answerMessage,1000);
                    /*
                    setTimeout(() => {

                      this.contacts[this.activeContact].messages.push({

                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: "ok",
                        status: "received",

                    });
                    },1000);
                    */

                }
            },

            answerMessage: function() {
                this.contacts[this.activeContact].messages.push({

                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: "ok",
                    status: "received",

                });
            },

            searchName: function() {

                for (var i = 0; i < this.contacts.length; i++) {

                    if (this.contacts[i].name.toLowerCase().startsWith(this.search.toLowerCase())) {
                        this.contacts[i].visible = true;
                    }
                    else {
                        this.contacts[i].visible = false;
                    }

                };

            }

        }    
    }
);