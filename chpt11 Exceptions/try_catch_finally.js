// NOTE: expected error: you need to take measures to handle
//       unexpected error = exception: you will let 'catch' block to deal with it.
// You can actually use 'catch' to handle all your expected/unexpected errors, but
// it cause performance issues: JS interpreter needs extra housekeeping to keep track of the exception until it's caught.
// if it's never caught, you program will end up with crashing.


// try: all things that may cause an exception(unexpected error).
// catch: catch any error you did NOT expect in your try code.
// finally: execute no matter there is exception or not.


const email = null; //whoops

function validateEmail(email) {
  //if (email === null) return new Error(`you put in null as your address!!!???`)

  return email.match(/@/) ? email : new Error(`invalid email: ${email}`);
}

try {
  if (email.match(/badword/))
    throw new Error("Don't use 'badword' inside your email.");  // raise/throw the error myself

  const validatedEmail = validateEmail(email);
  console.log(`typeof validatedEmail = ${typeof validatedEmail}`);
  // email="xxs@gmail" : string     ===> normal
  // email="xxsgmail" : object(Error)    ====>  expected error(I have error handling)
  // email=null : can't reach --> jump to catch{} ==> unexpected error(aka. exception, I need exception handling using catch)

  if (validatedEmail instanceof Error) {
    console.error(`Error: ${validatedEmail.message}`);
    console.log("In try{if{...}}");
  } else {
    console.log(`Valid email: ${validatedEmail}`);
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
  console.log("In catch{...}");
} finally {
  console.log("It comes to the end anyway!");
}

/**
 * even when catch throws, finally will be executed.
 */
try {
  try {
    throw new Error('oops');
  }
  catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}
