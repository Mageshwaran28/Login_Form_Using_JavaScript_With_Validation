var section =  document.createElement('section');

    var loginForm = document.createElement('div');
    loginForm.className = 'login-form';

        var form = document.createElement('form');

            var formHeader = document.createElement('div');
            formHeader.className='input-group header-group'

                var h1 = document.createElement('h1');
                h1.appendChild(document.createTextNode('Welcome back'))

            formHeader.appendChild(h1);

                var welcome = document.createElement('span')
                welcome.appendChild(document.createTextNode('Welcome back! Please enter your details'))

            formHeader.appendChild(welcome)

        form.appendChild(formHeader);

            var emailGroup = document.createElement('div');
            emailGroup.className = 'input-group email-group'

                var emailLabel = document.createElement('label');
                emailLabel.appendChild(document.createTextNode('Email'));

            emailGroup.appendChild(emailLabel);

                var emailInput = document.createElement('input');
                emailInput.type = 'email';
                emailInput.className='email';
                emailInput.placeholder='Enter your email'

            emailGroup.appendChild(emailInput);

        form.appendChild(emailGroup);

            var pwdGroup = document.createElement('div');
            pwdGroup.className = 'input-group password-group'

                var pwdLabel = document.createElement('label');
                pwdLabel.appendChild(document.createTextNode('Password'));

            pwdGroup.appendChild(pwdLabel);

                var pwdInput = document.createElement('input');
                pwdInput.type = 'password';
                pwdInput.className='password';
                pwdInput.placeholder='Enter your password'

            pwdGroup.appendChild(pwdInput);

        form.appendChild(pwdGroup);

            var remForGroup = document.createElement('div');
            remForGroup.className = 'input-group rem-for-group';

                var remGroup = document.createElement('div');
                remGroup.className = 'rem-group';
                    
                    var remInput = document.createElement('input');
                    remInput.type = 'checkbox';
                    remInput.className = 'remember';
                
                remGroup.appendChild(remInput);

                    var remLabel = document.createElement('label');
                    remLabel.appendChild(document.createTextNode('Remember for 30 days'))
                
                remGroup.appendChild(remLabel);

                    var forgot = document.createElement('a');
                    forgot.href='#';
                    forgot.className='forgot';
                    forgot.appendChild(document.createTextNode('Forgot password'))

                remGroup.appendChild(forgot);
                
            remForGroup.appendChild(remGroup);
        
        form.appendChild(remForGroup);

            var signinGroup = document.createElement('div');
            signinGroup.className ='input-group signin-group';

                var signinInput = document.createElement('input');
                signinInput.type='submit';
                signinInput.className='signin';
                signinInput.value='Sign in';

            signinGroup.appendChild(signinInput);

        form.appendChild(signinGroup);

            var googleSigninGroup = document.createElement('div');
            googleSigninGroup.className = 'input-group google-signin-group';

                var googleGroup = document.createElement('div');
                googleGroup.className='google';

                    var googleImg = document.createElement('img');
                    googleImg.src = 'google.png';
                    googleImg.className = 'google-img'

                googleGroup.appendChild(googleImg);

                    var googleTxt = document.createElement('span');
                    googleTxt.className = 'google-txt';
                    googleTxt.appendChild(document.createTextNode('Sign in with Google'))
                
                googleGroup.appendChild(googleTxt);

            googleSigninGroup.appendChild(googleGroup);

        form.appendChild(googleSigninGroup);

            var signupGroup = document.createElement('div');
            signupGroup.className = 'input-group signup-group';

                var signupTxt = document.createElement('span');
                signupTxt.appendChild(document.createTextNode('Don\'t have an account? '));

                    var signupLink = document.createElement('a');
                    signupLink.href = '#';
                    signupLink.appendChild(document.createTextNode('Sign up'));
                
                signupTxt.appendChild(signupLink);

            signupGroup.appendChild(signupTxt);

        form.appendChild(signupGroup);

    loginForm.appendChild(form);

        var result = document.createElement('div');
        result.className = 'result failure';

            var cancel = document.createElement('i');
        
        result.appendChild(cancel);
             
            var resGroup = document.createElement('div');
            resGroup.className='res-group';

                var resultMsg = document.createElement('div');
                resultMsg.className='result-msg';
            
            resGroup.appendChild(resultMsg);

                var resultError = document.createElement('div');
                resultError.className='error';
            
            resGroup.appendChild(resultError);



        result.appendChild(resGroup);

    loginForm.appendChild(result);

section.appendChild(loginForm);

    var sideLogo = document.createElement('div');
    sideLogo.className='side-logo';

        var circle = document.createElement('div');
        circle.className = 'circle';

    sideLogo.appendChild(circle);

        var blurLogo = document.createElement('div');
        blurLogo.className = 'blur';

    sideLogo.appendChild(blurLogo);

section.appendChild(sideLogo);

document.body.appendChild(section);