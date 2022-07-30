class MySingleton {
    static instance: MySingleton;
  
    private constructor() {}
  
    public static getInstance(): MySingleton {
      if (!MySingleton.instance) {
        MySingleton.instance = new MySingleton();
      } 
      
      return MySingleton.instance;
    };
  }

  const a1 = MySingleton.getInstance();
  console.log("a1===", a1); 

  const a2 = MySingleton.getInstance();
  console.log("a2===", a2);
  console.log("compare===", a1 === a2);

  
