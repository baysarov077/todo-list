const todoListObject = {
    items: [
      {
        text: "Завершить текущий челлендж",
        completed: false
      },
      {
        text: "Отдохнуть во время перерыва",
        completed: false
      },
      {
        text: "Помочь напарнику понять код",
        completed: false
      },
      {
        text: "Выиграть в мафию",
        completed: true
      },
    ],
    printAll(){
        for(i = 0; i < todoListObject.items.length; i++){
            if(!this.items[i].completed) {
                console.log(`[] ${this.items[i].text}`)
            }
            if(this.items[i].completed) {
                console.log(`[x] ${this.items[i].text}`)
            }
        }
    },
    add(text) {
      this.items.unshift({text: text, completed: false})
    },

    remove(num) {
       for(i = 0; i < this.items.length; i++){
        if(this.items[i].completed) {
            this.items.splice(i, num)
        }
       }
    },
    print(num) {
        if(!this.items[num].completed){
            console.log(`[] ${this.items[num].text}`)
        } else console.log(`[x] ${this.items[num].text}`)
    },
    complete(num){
        this.items[num].completed = true
    }
    
  }


