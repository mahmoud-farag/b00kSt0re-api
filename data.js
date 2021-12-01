import bcrypt from 'bcrypt';

const data = {
  users:[
    {
      name:'mahaamd',
      email:'mahamad@example.com',
      password:bcrypt.hashSync('1234',8),
      isAdmin:true
    },
    {
      name:'hend',
      email:'hend@example.com',
      password:bcrypt.hashSync('1234',8),
      isAdmin:false
    }
  ],
  products: [
    {
      name: "Lary ullman",
      image: "/images/b1.jpg",
      category: "Shirts",
      description: "Learning PHP and MySQL and making cool projects",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
     
    },
    {     
      name: "Benhamin J.Evans & David Flanagan",
      image: "/images/b2.jpg",
      category: "Shirts",
      description: "How java workes and learning advanced topics",
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 4,
      numReviews: 10,
     
    },
    {
      name: "Fabio M.Soares, Alan M.F.Souza",
      image: "/images/b7.jpg",
      category: "Shirts",
      description: "NN and how to impelement it in java",
      price: 220,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 17,
     
    },
    {
      name: "Wes McKinney",
      image: "/images/b4.jpg",
      category: "Pants",
      description: "underStand the data analyist concepts in python",
      price: 78,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
     
    },
    {
      name: "Silivo Motoreto, Benjamin Jakobus",
      image: "/images/b5.jpg",
      category: "Pants",
      description: "Learning BootStrap and modern topics",
      price: 65,
      countInStock: 0,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
     
    },
    {
    
      name: "Roberto Tamassia",
      image: "/images/b6.jpg",
      category: "Pants",
      description: "DataStructure and algorithms for python",
      price: 139,
      countInStock: 12,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 15,
     
    }
  ],
};
export default data;
