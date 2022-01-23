/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createProductOrder = /* GraphQL */ `
  mutation CreateProductOrder(
    $input: CreateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    createProductOrder(input: $input, condition: $condition) {
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
export const updateProductOrder = /* GraphQL */ `
  mutation UpdateProductOrder(
    $input: UpdateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    updateProductOrder(input: $input, condition: $condition) {
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
export const deleteProductOrder = /* GraphQL */ `
  mutation DeleteProductOrder(
    $input: DeleteProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    deleteProductOrder(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
