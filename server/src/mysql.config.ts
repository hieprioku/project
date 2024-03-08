import mysql2 from "mysql2";


export const connection = () => {
    try {
    const createConnection =    mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "xitin123",
    database: "hakathon"
});
  
if (createConnection) {
    console.log("connection successful");
}
    return createConnection;
    } catch (error) {
        
            throw new Error(error as any);
        }
    
}