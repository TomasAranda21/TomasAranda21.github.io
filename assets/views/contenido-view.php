<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../assets/css/styles.css">
    <title>Formulario</title>
</head>
<body>
    <main class="l-main">
           <!--===== CONTACT =====-->
           <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" class="contact__form" method="POST">
                        <input type="text" placeholder="Name" class="contact__input" name="nombre">
                        <input type="email" placeholder="Email" class="contact__input" name="email">
                        <textarea name="mensaje" id="" cols="0" rows="10" class="contact__input"></textarea>
                        <input type="submit" value="Enviar" class="contact__button button" name="enviar"> 
                    </form>
                </div>
            </section>
    </main>
</body>
</html>