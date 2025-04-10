// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

// HTML is a markup language.
// But in React, we write this markup using JSX — a syntax that looks like HTML inside JavaScript.

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// composition: placing components inside other components to build more complex, but organized UI.

// React does not prescribe how you add CSS files. In the simplest case, you'll add a <link>

// <br> tag is used to break the lines, when to want to start another line without breaking the current sentence 

// inside JSX, if you want to use a javascript variable pr expression(like math, function calls, etc.)
// you wrap it in curly braces{}
// {} in JSX means escape back into Javascript 

// return (
//   <h1>
//     {username.name}
//   </h1>
// );


// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// In react, there is no special syntax for writing conditions. Instead, you will use the same techniques as you use when writing regular JavaScript code. 

// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;

// }
// return (
//   <div>
//     {content}
//   </div>
// );

// // other method 
// <div>
//   {isLoggedIn ? (
//     <AdminPanel />
//   ) : (
//     <LoginForm />

  
//   )}
// </div>

// const products = [
//   {title : 'Cabbage', isFruit: false, id: 1},
//   {title: 'Garlic', isFruit: false, id: 2},
//   {title: 'Apple', isFruit: true, id: 3},
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//     key = {product.id}
//     style = {{
//       color: product.isFruit ? 'magenta' : 'darkgreen' 
//     }}
//     >
//       {product.title}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

//Responding to events

// function MyButton(){
//   function handleClick() {
//     alert('You clicked me!');

//   }
//   return (
//     <button onClick={handleClick}>
//       Click me 
//     </button>
   
//   );
// }

// UseState is one of the react hook 
//  basic syntax 
// const [state, setState] = useState(initialState)
 
export default function App() {
  return (
    <Toolbar 
    onPlayMovie = {() => alert ('Playing!')}
    onUploadImage = {() => alert('Uploading!')}
    />
  );
}
function Toolbar ({ onPlayMovie, onUploadImage}) {
  return (
    <div>
      <Button onClick = {onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick = {onUploadImage}>
        Upload Image 
      </Button>
    </div>
  );
}
function Button ({ onClick, children}) {
  return (
    <button onClick = {onClick}>
      {children}
    </button>
  );
}






