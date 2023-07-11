import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({ 
    
    username: {
        type: String,
        unique: [true, 'Insira um nome de usuario valido!'],
        required: [true, 'É necessario inserir.'],

    email: {
        type: String,
        unique: [true, 'Email já existe!'],
        required: [true, 'É necessario um endereço de Email!'], 
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i],
    },
    },
    message: {
        type: String,
        required: [true, "Requerido."]
    },

    date: {
        type: Date, 
        default: Date.now
    }

});

const User = models.User || model("User", UserSchema);

export default User;