# README

## **Overview**

Artsy is a cloned version of Etsy.com, an E-Commerce platform for artisan crafts. At Artsy, users can view the product page with all the descriptions, add or edit reviews and be able to add products to their shopping cart.

<img src="https://github.com/WinnieNg3210/Artsy/blob/main/Splash.jpg?raw=true" style="height: 300px; width:500px;">

[Here's the live page!](https://artsyyapp.herokuapp.com/)

## **Technologies Used**

- Postgresql
- Ruby on Rails
- React
- Redux
- AWS

## **Features**

### User Authentication

New users can sign up for a new account or they can user the demo login to checkout the features of the site.

### Product listings

Users are able to see all of a product's information by selecting any images from the home page: description, price, title, the seller and all of the reviews for this product. They can toggle on the description button to read through what the product is about.

### Reviews

Logged in users will be able to add a new review, select how many stars they want to give for the product, edit their existing review and edit the amount of stars in the edit page. If a non logged in user looks at the product page, they will be able to see past reviews but they won't be able to create nor edit any reviews.

<img src="https://github.com/WinnieNg3210/Artsy/blob/main/Reviews.jpg?raw=true" style="height: 300px; width:500px;">

### Shopping Cart Item

Logged in users can add items to their shopping cart. From the product show page they can choose how many quantities of the item they'd wish to purchase, which will be reflected in the checkout page. The user can also update the quantity in the checkout page as well. Users can also remove the product from their shopping cart if they wish to do so. The total price will be reflected based on what is in the shopping cart and the quantity for each product.

<img src="https://github.com/WinnieNg3210/Artsy/blob/main/ShoppingCart.jpg?raw=true" style="height: 300px; width:500px;">

### Search Functionality

All users are able to search for any items based on the search input and it will send them to the search page.
![artsy_search](https://user-images.githubusercontent.com/32966351/136874672-2c2be39e-8a95-4175-a909-878860c7879a.gif)

### Code Snippet
To make sure there's only one unique cart item in the page, I parsed through the current state of the cart items by first setting up an empty object, then iterate through the current list of cart items that is in the redux store and find if an item is there based on its id. If the id key exists, then the item will not be added to the cart page, instead it will navigate to the cart page and any changes in cart item quantity will be made in the cart page itself. If the id key does not exist yet in the cart item page, then it will be added to the page.

```...javascript
  handleAddToCart(e) {
    e.preventDefault();

    if (!this.props.user) {
      this.props.showModal("Sign in");
    } else {
      const productId = this.props.product.id;
      const cartItems = this.props.cartItems;

      const cartItem = Object.assign({}, this.state, {
        product_id: productId,
        user_id: this.props.user,
      });
      let items = {};
      for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i];
        items[item["product_id"]] = true;
      }

      if (items.hasOwnProperty(productId)) {
        this.navigateToCart();
      } else {
        this.props.createCartItem(cartItem).then(this.navigateToCart);
      }
    }
  }
```
