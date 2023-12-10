import { auth, db } from "../services/firebaseConection";
import { useState, createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigate = useNavigate();

  function signIn(email, password) {
    console.log(email);
    console.log(password);
    alert("LOGADO COM SUCESSO");
  }

  // Cadastrar novo usuário
  async function signUp(email, password, name) {
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, password).then(
      async (value) => {
        let uid = value.user.uid;

        await setDoc(doc(db, "users", uid), {
          nome: name,
          avatarUrl: null,
        })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
              avatarUrl: null,
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            toast.success("Seja bem-vindo ao sistema!");
            navigate("/dashboard");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  }

  // Função criada para salvar os dados na localStorage
  function storageUser(data) {
    localStorage.setItem("@ticketsPRO", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

// 4º passo: criar arquivo de contexto para criação e autenticação do usuário

// obs.: !! estas duas exclamações fará com que o signed tenha um valor boleano, que será o mesmo que falso, porque o valor no useState é null
