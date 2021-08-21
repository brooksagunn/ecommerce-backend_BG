

https://user-images.githubusercontent.com/80599137/130328045-49e31d32-d935-4eab-baf4-b81668100a42.mp4

# e-commerce-backend_BG

### [My GitHub!](https://github.com/worldunfurled)

## Table of Contents:

* [Description](#description)
* [Installing](#installing)
* [Usage](#usage)
* [Testing](#testing)

## Description

A backend for an e-commerce website that allows for manipulation of categories, products, and relevant tags by creation, viewing, updating, deleting.

## Installing

The npm packages used for this are as follows:

* *Express*: for the server
* *dotenv*: to hold and hide local environment variables
* *MySQL2*: to interact with the SQL DB with commands (more efficient than the normal MySQL package)
* *Sequelize*: to create a MySQL schema

Use `npm i` to install all of them at once.

Additionally, you will need to install Insomnia or another API interactive program to interact with the API.

## Usage

To interact with a category, product, or tag, navigate to the correct localhost api route, whose root is the plural of the specified items. Ex: `http://localhost/api/categories`. To perform a GET request, which is the recommended first step, simply type that address making sure the API program method is set to GET. You can then GET a specific item by typing entering its ID after the root. To post a new item, simply navigate to the root, set the method to post, and enter valid contents that should be determinable by the GET request. A less obvious caveat is that products must include a tagIDs property as an array. Finally, to delete an item, type that specific item's id at the root.

## Testing

MySQL Workbench helped visualize the database as it was manipulated. Insomnia was amazing in that it lets you add folders with different method for testing API routes.

## E-signature

Brooks Gunn :)
