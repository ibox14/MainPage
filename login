<!--Podstrona logowania z elementami css i javy w jendnym pliku -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logowanie</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>


        body {
        font-family: Arial, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        background: linear-gradient(135deg, rgba(6, 15, 104, 1.0), rgba(107, 9, 91, 1.0));
        }

        .login-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h2 {
            color: #333;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10px; 
            margin-bottom: 10px; 
        }

        label {
            margin-top: 10px;
            color: #555;
        }

        input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            margin-bottom: 15px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background-color: rgba(6, 15, 104, 0.8); /* Kolor nawigacji */
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            margin-bottom: 10px;
        }

        button:hover {
            background-color: #001F5B;                          
        }

        .additional-options {
            margin-top: 10px;
            color: #555;
        }

        .additional-options a {
            text-decoration: none;
            color: rgba(6, 15, 104, 0.8);  /* Kolor nawigacji */
        }

        .separator {
            margin: 0 8px;
        }

        .btn-google, .btn-facebook {
            background-color: rgba(6, 15, 104, 0.8); /* Kolor nawigacji */
            color: #fff;
            border: 1px solid #fff; 
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            margin-bottom: 10px;
        }

        .btn-google:hover, .btn-facebook:hover {
            background-color: #001F5B; 
        }

        /* Styl stopki */
        .footer {
            background-color: rgba(6, 15, 104, 0.8);
            color: #fff;
            padding: 10px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
        }

        .footer p {
            margin: 0;
        }


    </style>
</head>
<body>

    <div class="login-container">
        <!-- Dodane logo -->
        <img src="logo_logowanie.png" alt="Logo" class="logo">
        <h2>Zaloguj się do panelu klienta</h2>
        <form action="#" method="post">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Hasło</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Zaloguj się</button>
            <button class="btn-google" onclick="loginWithGoogle()">
                <i class="fab fa-google"></i> Zaloguj przez Google
            </button>
            
            <button class="btn-facebook" onclick="loginWithFacebook()">
                <i class="fab fa-facebook-f"></i> Zaloguj przez Facebook
            </button>
        </form>

        <div class="additional-options">
            <a href="#">Zarejestruj się</a>
            <span class="separator">|</span>
            <a href="#">Przypomnienie hasła</a>
        </div>
    </div>

    <script>
        // Funkcje obsługujące logowanie przez Google i Facebook (tylko w celach demonstracyjnych)
        function loginWithGoogle() {
            alert("Logowanie przez Google");
        }
    
        function loginWithFacebook() {
            alert("Logowanie przez Facebook");
        }
    </script>

    <!-- Stopka -->
<footer class="footer">
    <div class="container text-center">
        <p>Copyright © 2023 - Sebastian Nowak</p>
    </div>
</footer>

</body>
</html>
