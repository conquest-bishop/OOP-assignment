# Class 1: Computer
class Computer:
    def __init__(self, name, RAM, SSD, OS):
        self.name = name
        self.RAM = RAM
        self.SSD = SSD
        self.OS = OS

    def specs(self):
        return f"{self.name}, has {self.RAM}-GB RAM on a {self.SSD} GB SSD, running {self.OS}."

    def upgrade(self):
        self.RAM += 1
        return f"{self.name} is now {self.RAM} GB"

    def changeOS(self, newOS):
        self.OS = newOS
        return f"{self.name} has a new OS: {self.OS}"

    def update(self):
        self.OS = "updated"
        return f"{self.name} has updated from the previous version."

# Class 2: Phone
class Phone:
    def __init__(self, make, model, year, color):
        self.make = make
        self.model = model
        self.year = year
        self.color = color

    def setup(self):
        return f"Setting up the {self.year} {self.color} {self.make} {self.model}."

    def run(self):
        return f"Running the {self.make} {self.model}."

    def updates(self):
        return f"Updating the {self.make} {self.model}."

    def customize(self):
        return f"Applying customizations of the {self.make} {self.model}."


# Subclass Iphone
class Iphone(Phone):
    def __init__(self, make, model, year, color, titanium):
        super().__init__(make, model, year, color)
        self.titanium = titanium

    def action_button(self):
        return f"{self.make} {self.model} has a new action button."




# Class 3: Book
class Book:
    def __init__(self, title, author, genre, pageCount):
        self.title = title
        self.author = author
        self.genre = genre
        self.pageCount = pageCount

    def getInfo(self):
        return f"{self.title} by {self.author} ({self.genre}) - {self.pageCount} pages"

    def read(self):
        return f"Reading {self.title}..."

    def recommend(self):
        return f"I recommend reading {self.title} by {self.author}."

    def bookmark(self, pageNumber):
        return f"Bookmarking page {pageNumber} of {self.title}."

# Class 4: Movie
class Movie:
    def __init__(self, title, director, genre, runTime, timeFrame):
        self.title = title
        self.director = director
        self.genre = genre
        self.runTime = runTime
        self.timeFrame = timeFrame

    def getInfo(self):
        return f"{self.title} by {self.director} ({self.genre}) - {self.runTime} minutes"

    def watch(self):
        return f"Watching {self.title}..."

    def recommend(self):
        return f"I recommend watching {self.title} by {self.director}."

    def bookmark(self):
        return f"Bookmarking the time frame {self.timeFrame} of {self.title}."

# objects of the classes
computer1 = Computer("Dell", 32, 500, "chromeOS")
phone1 = Phone("Google Pixel", 8, 2023, "White")
book1 = Book("The Lord of the Rings", "J.R.R. Tolkien", "Fiction", 500)
movie1 = Movie("The Lord of the Rings", "Peter Jackson", "Fiction", "2 hours", "2:33")
my_iphone = Iphone("Apple", "iPhone 13", 2023, "Silver", True)

print(computer1.specs())
print(phone1.setup())
print(book1.getInfo())
print(movie1.bookmark())
print(my_iphone.action_button())
