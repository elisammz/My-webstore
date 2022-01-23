/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProductOrder = /* GraphQL */ `
  query GetProductOrder($id: ID!) {
    getProductOrder(id: $id) {
      product_id
      order_id
      order {
        order_id
        id
        user
        date
        total
        products {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      id
      product {
        id
        title
        description
        image
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const listProductOrders = /* GraphQL */ `
  query ListProductOrders(
    $filter: ModelProductOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        product_id
        order_id
        order {
          order_id
          id
          user
          date
          total
          createdAt
          updatedAt
          customer
        }
        id
        product {
          id
          title
          description
          image
          featured
          price
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      order_id
      id
      user
      date
      total
      products {
        items {
          product_id
          order_id
          id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        order_id
        id
        user
        date
        total
        products {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      description
      image
      featured
      price
      orders {
        items {
          product_id
          order_id
          id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
