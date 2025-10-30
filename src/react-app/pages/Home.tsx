import { useState, useEffect } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import one from "@/assets/img/1.jpeg";
import two from "@/assets/img/2.jpeg";
import three from "@/assets/img/3.jpeg";
import four from "@/assets/img/4.jpeg";
import five from "@/assets/img/5.jpeg";
import six from "@/assets/img/6.jpeg";
import seven from "@/assets/img/7.jpeg";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Create floating hearts
  const FloatingHeart = ({ delay, duration, left }: { delay: number; duration: number; left: string }) => (
    <div
      className="absolute text-pink-500 opacity-20 pointer-events-none"
      style={{
        left,
        bottom: '-20px',
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      }}
    >
      <Heart className="w-6 h-6 fill-current" />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Floating hearts background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <FloatingHeart
            key={i}
            delay={i * 0.8}
            duration={8 + Math.random() * 4}
            left={`${Math.random() * 100}%`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-12 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
            Ana Raquel
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-6 text-pink-300">
            de Souza Rodriguez
          </h2>
          <div className="flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-purple-300">
            <Heart className="w-6 h-6 fill-pink-500 text-pink-500 animate-pulse" />
            <span className="font-semibold">Eu te amo</span>
            <Heart className="w-6 h-6 fill-pink-500 text-pink-500 animate-pulse" />
          </div>
          <p className="mt-4 text-base sm:text-lg text-purple-400 font-light">
            26 de outubro de 2025
          </p>
        </div>

        {/* Image Carousel */}
        <div
          className={`max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.4)] border-2 border-purple-500/30">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20">
              <img
                src={images[currentImage]}
                alt={`Momento ${currentImage + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-pink-500/80 hover:bg-pink-500 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-pink-500/80 hover:bg-pink-500 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage
                      ? 'bg-pink-400 w-8'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Love Letter Card */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-purple-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(236,72,153,0.3)] border border-pink-500/20">
            {/* Card header */}
            <div className="text-center mb-8 pb-6 border-b border-pink-500/30">
              <Heart className="w-12 h-12 mx-auto mb-4 text-pink-400 fill-pink-400 animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                " PARA A ÚNICA MULHER QUE JÁ AMEI "
              </h3>
            </div>

            {/* Letter content */}
            <div className="prose prose-invert prose-pink max-w-none">
              <div className="text-pink-100/90 leading-relaxed space-y-4 text-base md:text-lg">
                <p>
                  Oii minha princesa! Tudo bem? Eu escrevi esta carta por que eu te amo muito mesmo, o que eu sinto por você é algo muito maior do que você pensa, eu me importo com você bastante, todo dia eu me pergunto se você acordou bem, se está se sentindo bem, se tem algo te incomodando, como você tá e eu sempre vou querer saber por que você não é um peso pra mim, você é minha namorada e sempre ficarei ao seu lado, caminhando junto com você, seus sentimentos as coisas que te atrapalham agora também me atrapalham, eu sempre vou querer te ouvir por que é isso que eu tenho e quero fazer, eu quero estar presente para você, quero me esforçar me dedicar, e sempre que eu achar que estiver fazendo besteira ou te atrapalhando é claro que eu não vou querer te ver assim, por que a ultima coisa que eu quero é você triste ou bravo principalmente por minha causa, eu tenho medo de falhar com você, por conta de ser minha primeira vez, por isso eu sempre te peço desculpas mesmo sendo em um nível que já da estresse, eu quero que saiba que eu sempre fico arrependido dos meus atos e eu tento melhora-los e quando eu não consigo eu não penso em mais nada além de chorar, eu não quero te perder de jeito nenhum, eu não consigo viver sem você daqui pra frente, você é o que me completa, eu amo estar com você, ao seu lado, junto com você, eu amo cada detalhe quando estou com você, eu sempre estou feliz com você, eu não sei qual é o meu problema, eu sempre te deixo brava e isso acaba comigo, as vezes eu penso que sou um péssimo namorado, por que eu me preocupo com o seu bem estar, eu sinto que as vezes eu não consigo te deixar feliz, não sei se é normal, mais eu quero ser feliz com você, eu sou feliz com você e quero te deixar feliz também, todo dia com você é o melhor dia da minha vida, eu só queria poder sair mais com você mais isso é difícil de acontecer, além dos estudos, você sabe que o estudo é bastante importante para o nosso futuro, temos que nos dedicar bastante, mais eu tenho medo de me dedicar bastante nos meus estudos e acabar me afastando de você, talvez você ache que eu não te amo mais, meu amor, eu posso ficar 1 ano sem te ver, mais eu vou te amar cada dia, eu te amo muito, nada vai fazer eu parar de gostar de você, eu juro, te prometo, não importa o quanto vamos esperar, nem quanto tempo vai demorar, por que eu ja estou feliz que a mulher com quem vou viver o resto da minha vida, com certeza é você, promete me amar não importe o quanto tempo dure para a gente viver juntos? Eu te prometo isso, esse ano aconteceu algo muito incrível da minha vida, a melhor coisa que aconteceu, sim você foi essa razão, tudo começou esse mês de outubro no dia 26, eu pedi a mulher da minha vida em namoro, e eu to muito feliz em saber que agora eu namoro uma garota incrível, maravilhosa, ela não é igual a todas as mulheres, ela também não é perfeita, ela é especial, ela é única, o seu brilho é diferente, e ela é atraente do jeitinho dela, eu amo ela, eu vejo esse diferente nela, tudo nela me atraí, eu amo cada parte do seu corpo, tudo em você eu amo, e nunca vou desistir de você, essa aliança no meu dedo não vai sair tão cedo, nem que fique no caixão sksksk você é mesmo minha mulher eu não acredito nisso, desde o primeiro dia que eu te vi, você era só uma garota bonita e atraente que pediu para me acompanhar no Valparaíso, foi legal ter te conheci lá, por que se não fosse essa pergunta nada disso teria acontecido, eu vou falar logo a verdade, no Valparaíso, eu gostei pela primeira vista, da sua beleza, você é muito linda, e eu não conseguia para de te olhar, você é uma joia rara, a minha joia, e eu vou cuidar de você até o final, vou te fazer feliz, os momentos bons e ruins eu vou estar com você, sempre ao seu lado, de acompanhando e te dando forças para seguir em frente, vai ter dias que o nosso amor vai estar fraco, uma hora que vai começar a ter uns desinteresses, algum minuto talvez comece a enjoar um do outro mais por favor isso é só uma fase que a gente vai enfrente, não pare de me amar por causa disso, eu não vou parar de te amar, eu aceito você, e seus defeitos, eu não ligo pra isso, eu ligo pra você e pro nosso futuro que estâ longe mais a gente tem que batalhar para conseguir, so queria dizer que ter te conhecido foi a melhor coisa da minha vida, que você é o melhor presente do mundo, a melhor mulher do mundo, eu te amo e sempre te amei, você me perguntou, por que você, por que decidi te amar e viver com você, a resposta é simples, por que o que eu vi em você, só não tinha visto em mais ninguém, eu me te amei desde o primeiro dia que eu te vi, não duvide disso, eu escolhi você, por que a gente se conheceu de forma natural, foi o momento que escolheu quando a gente se viu, não foi nada forçado, ninguém mandou você ir você falar comigo, você por si que veio, ninguém mandou que eu falasse com você, eu falei com você porque eu queria fazer isso, foi minha escolha, eu te amo de verdade, não é algo forçado, ninguém mandou que eu te amasse, eu te amoo por que eu escolhi isso na minha vida, você na minha vida é algo muito bom, eu sinto que posso contar com você sempre, eu posso me sentir melhor com você, eu posso chorar em seus braços, contar meus medos, minhas inseguranças, eu me sinto tão bem, em me descansar em seus braços poder me relaxar neles, e poder contar como me sinto, estar deitado com você, te abraçando, te beijando, podendo me abrir com você, chorando e contando como foi meu dia, como eu me sinto, por que você me faz tão feliz era a coisa que eu mais precisava todo dia, eu não vejo a hora de a gente viver juntos, poder falar sobre seus problemas, os nossos problemas, a gente passou de ser "meu" pra "nosso" tão rápido, e se tudo aconteceu tão rápido, e seus sentimentos foram precipitados, e se você agora se arrependeu e já enjoou de mim por que viu que eu não era o homem certo para você? Esse é meu medo, meu maior medo, eu não quero que isso aconteça, eu espero que você seja minha primeira e ultima namorada, e você vai ser pra mim, eu te amoo muito mesmo, não é algo de momento, não é precipitado, não tenho arrependimentos, eu te amo de verdade, não tenho medo de dizer isso, tenho orgulho de você, orgulho de te amar e quero viver com você até o final, você é a primeira pessoa que eu amo de verdade, primeira pessoa que eu namoro, primeira pessoa que digo que vou viver o resto da minha vida ao seu lado, a primeira e única que me beijou, a primeira mulher que me disse que me amava sem medo, a primeira mulher que disse que teria uma família comigo, com filhos, isso é algo muito bom, você foi a primeira garota que meus pais conheceram, e eles gostam de você bastante, a primeira garota que eu tive um encontro, a primeira garota com que eu pude chorar em seus braços mesmo, arrependido de talvez ter machucado ela, eu não queria te deixar brava, eu não fiquei triste naquele dia, aquele dia foi maravilhosa, foi quando eu pedi minha garota em namoro, eu morri de felicidade, não quero que fique brava por minha causa, de agora em diante eu sempre vou te contar o que me incomoda e me atrapalha, e você pode fazer o mesmo também, eu vou contar com você sempre que estiver comigo, eu só quero estar com você só isso, eu te amo, amo cada momento com você, conversar com você, rir com você, me divertir, eu só quero que saiba que tudo que aconteceu agora, não é nada falso, não menti pra você, tudo foi real, tudo que eu te disse realmente foi do fundo do meu coração, eu te quero a todo estante, todo tempo, eu quero você e preciso de você, eu não quero que nosso relacionamento seja só um momento de adolescente, eu quero que seja verdadeiro, que nosso amor seja muito maior do que só dois adolescente que querem aproveitar a juventude, eu quero me casar com você, quero te amar a cada dia, quero viver com você, quero ter um família com você, saiba que eu te amo, as vezes não posso estar te demonstrando isso, mais isso não quer dizer nada eu só devo estar pensando de mais, ou só sendo eu, eu te amoo agora e para todo sempre, quando eu digo que vou me casar com você é por que eu quero e vou me casar com você, você vai me amar e esperar todo esse tempo junto comigo para se casar comigo? Vai valer a pena? Você vai ser um mulher muito feliz? E você vai aceitar se casar comigo? Obrigado por ler isso, é sempre importante ter alguém como você aqui, eu espero que quando você estiver lendo esta carta você esteja comigo neste exato momento, eu ao seu lado, segurando sua mão, e te beijando, eu so penso nisso, sou muito grato por você estar na minha vida, eu te amo meu amor, te adoro minha princesa, gosto de você minha querida, me importo com você meu bb, eu te amo com muita convicção e certeza absoluta, beijoss e eu quero beijos agora mesmo quando você ler isso kskkk
                </p>
              </div>
            </div>

            {/* Card footer */}
            <div className="mt-8 pt-6 border-t border-pink-500/30 text-center">
              <div className="flex items-center justify-center gap-2 text-pink-300">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-lg">Com todo meu amor</span>
                <Heart className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <div className="flex items-center justify-center gap-2 text-purple-400/80">
            <Heart className="w-4 h-4 fill-current animate-pulse" />
            <span className="text-sm">Para sempre juntos</span>
            <Heart className="w-4 h-4 fill-current animate-pulse" />
          </div>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
