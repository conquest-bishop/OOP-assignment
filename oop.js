// Class 1: Computer
class Computer {
  constructor(name, RAM, SSD, OS) {
    this.name = name;
    this.RAM = RAM;
    this.SSD = SSD;
    this.OS = OS;
  }

  specs() {
    return `${this.name}, has ${this.RAM}-GB RAM on a ${this.SSD} GB SSD, running ${this.OS}.`;
  }

  upgrade() {
    this.RAM++;
    return `${this.name} is now ${this.RAM} GB`;
  }

  changeOS(newOS) {
    this.OS = newOS;
    return `${this.name} has a new OS: ${this.OS}`;
  }

  update() {
    this.OS = "updated";
    return `${this.name} has updated from previous version.`;
  }
}

// Class 2: Phone
class Phone {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  setup() {
    return `Setting up the ${this.year} ${this.color} ${this.make} ${this.model}.`;
  }

  run() {
    return `running the ${this.make} ${this.model}.`;
  }

  updates() {
    return `Updateing the ${this.make} ${this.model}.`;
  }

  customize() {
    return `applying the customizations of the ${this.make} ${this.model}.`;
  }
}


// Subclass Iphone
class Iphone extends Phone {
    constructor(make, model, year, color, titanium) {
      super(make, model, year, color); 
      this.titanium = titanium; 
    }

    actionButton() {
        return ` ${this.make} ${this.model} has new action button.`;
      }
  

  }
  
 

// Class 3: Book
class Book {
  constructor(title, author, genre, pageCount) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
  }

  getInfo() {
    return `${this.title} by ${this.author} (${this.genre}) - ${this.pageCount} pages`;
  }

  read() {
    return `Reading ${this.title}...`;
  }

  recommend() {
    return `I recommend reading ${this.title} by ${this.author}.`;
  }

  bookmark(pageNumber) {
    return `Bookmarking page ${pageNumber} of ${this.title}.`;
  }
}


// Class 4: Movie
class Movie {
    constructor(title, director, genre, runTime, timeFrame) {
      this.title = title;
      this.director = director;
      this.genre = genre;
      this.runTime = runTime;
      this.timeFrame = timeFrame;
    }
  
    getInfo() {
      return `${this.title} by ${this.director} (${this.genre}) - ${this.runTime} pages`;
    }
  
    watch() {
      return `watching ${this.title}...`;
    }
  
    recommend() {
      return `I recommend watching ${this.title} by ${this.director}.`;
    }
  
    bookmark() {
      return `Bookmarking the time frame ${this.timeFrame} of ${this.title}.`;
    }
  }


// objects of the classes
const computer1 = new Computer("Dell", 32, 500, "chromeOS");
const phone1 = new Phone("Google Pixel", 8, 2023, "White");
const book1 = new Book("The Lord of the Rings", "J.R.Tolkins", "Fiction", 500);
const movie1 = new Movie("The Lord of the Rings", "Peter Jackson", "Fiction", "2 hours","2:33");
const myIphone = new Iphone("Apple", "iPhone 13", 2023, "Silver", true);

console.log(computer1.specs());
console.log(phone1.setup());
console.log(book1.getInfo());
console.log(movie1.bookmark());
console.log(myIphone.titanium); 





















