function validaEmail($email){
    //verifica se e-mail está em formato correto
    if (!ereg('^([a-zA-Z0-9.-_])*([@])([a-z0-9]).([a-z]{2,3})',$email)){
        $mensagem='E-mail Inv&aacute;lido!';
        return $mensagem;
    }
    else{
        //Valida o dominio do email
        $dominio=explode('@',$email);
        if(!checkdnsrr($dominio[1],'A')){
            $mensagem='E-mail Inv&aacute;lido!';
            return $mensagem;
        }
        else{return true;} 
    }
}

