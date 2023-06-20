import mongoose from 'mongoose'

const connectDb = async () =>{

    try{
        console.log(process.env.CONNECTION_STRING)
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`Database connect: ${connect.connection.host}`)
    } catch(err){
        console.log(err)
        process.exit(1)

    }


}

export default connectDb