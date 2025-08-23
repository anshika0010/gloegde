"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Kishore K, UK",
    location: "UK",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBBwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAD0QAAIBAwMCBAMGAwcDBQAAAAECAwAEEQUSITFBEyJRYQYUcTJCgZGhwQex8BUzUmLR4fFDU7IjJFRjgv/EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAEFAAb/xAAmEQADAAICAgIDAAIDAAAAAAAAAQIDERIhBDEiQRMyUWFxBRQz/9oADAMBAAIRAxEAPwAGOI1II6kbyVJ5Xj4qrjqSTltlTeJ4hwB0rlnbsGztNWEcGZORRaW6gVi2zWQbWcBcUXb22MHA/KnxxKKNgQHAFbwM5ihg46UXFaEnNPhi6Zqyt1XoOta70Zx5FRPbBWya6qjgCrC/iyPxoa2hG7mps7q2NjUocItqZ9akhZlIxyO9EMFxgUwRHtS64wze2OMwqMyHPlFOaLHNJACcYpVZ69I9xRHIWYZ5oN0yeak1TWdK0uLN5eRRt025yx/CsRqnx6N5XS7Vm7eJLx+lehZLNaRtolRRliAB1JoDVfibSNKQiS4V5OyJ5jXl9/rWpahn5m7fafup5RQCR89s0xeP/WEmbS5+PLia6X5S22QgjJfqRW7sbhLyyhuYjlZEDfSvGIxjpXpX8O7v5nTZbR+sJ8v0NbmlzHxZqSbNDtqGWInrVh4Brhhrn1d/0cpn+Gfu9PLebAqkntnifBFbh488YquvrBWTOOazDDu+w71MmYSPI6Ux7MtyBRcsRikxmnr0rsTinfRDV/0pZYTG3WmgVY3SZB4ocRZrpQto5mWtMF254rjRZHQUekAzzTLiMIMita0wU9orzDz0FRtGR0ODUzy4OBTCSeTXntnkl7DNP1SW2OGYkY9aVVjnnilSqwpvbHzncrSNVPFuSh9mwYqf5rfUSsrvQzLQdXL9D4B0oodOKbHFREceOa1pHk2QgMPpRlscEVBLxToGcsMdKJTsW70y8tjkUSilWDCh7LG0etHoeK5+bIlWvsvxQ6nYNeluOKZDGNue9TXLoiFpGCoOST0FZbUfjnRdPLJbSNfTr9y1Ax+LHikfjzX7GbhGrROQMZJ6UPqN/a6ZGZL65ihX/wCxsZ+g715pqHxvr+oZWy8OwgP/AGuZPxY/tWdltpJpDLcyyzyMcl5HLE/nRT4tP9medI3uqfxGsYt0emWst24ON7eVR+9ZPUfijW9TLK9z8vCekcA28fXrQCwBeAMU9UwKonx5kHYEYSz7nJZu5bk07wcUZtrhWj1o8CeHgVzGOKKKcVHja6nBODnpxQ6NRHghQ207ScA+prT/AMP9Q+V11ImbyTrtP1ruu3VxqXw9bMdOkiWNtytCiiFU6Z45yfes1YXBtL23nH2o5Af1pVfOGgl+x74ajIpWzia2ilT76g0jXBvJ3o6Ez0NdagPIooCoXHNHit8uheSeinvtO8QlxVSV8KTZWzCK8dUt/phMniLXZ8ea+zn5dfRUTW29N1BmLaav0QBdjdaB1CFVHHeujgyPWjn+Ri29oqXk2ULNLvBUdaImtZHPl6UlgKjnrVD7JluSvWBgOaa68Yo2QdR6UBPIF6/hWPoNLZAygHmu01IJ7lzgEj2pUDoaoWjTGFKktYkDZqGeXZQ6XBzitUtoF3KZdhkwaSzqvFVayP2oi2znL1nFfZ55KrpIsURJWBo5bcYGOtB2zLkUalyq8L1qfPnWNbY/DidHZb2DTImedmJxnaoyTWU1P+Id65MWlWHhE8CS45I/CrzUJA0rzMPKMLWX1u0RJRMq4D9frUWHWW90XtKZ0ijvZdR1eQy6peyz88RlsIP/AMjiuw2aRIAAB9BijFQDoKftyK6SlLpCmwXwgo4qKRfKaMdcUNItC0agUjim1IwxTcc0DNOgV3bxU9hayXt0lvECWf0H51baxof9mJGpYtNkKVBzkn29enFA6lPQWii2cVFIlaa10Sb+zmDIVmdh2+yB/wA/oKpLiIRyOgYMFOMjvQqlTej2mWWjRy6ho02mQusEfiGW4l5JcAZA+nFZWaMxyPGfuMVP4Vo/h91XUBDLOYoZhtkOcAjOcGgfiG2SLUJJIYTHbzcx5GARnGR7UtdVoL6PRfgbU/mvh+KN/tReU/h0rQ+JXnX8NZwLu4tGbhgHFejRQ4rj+R4dXleiuM6mdM6HqR4ty04R7OlJm29KCfHrG+z1ZJtdDEVk69KldVZa4g31yQOoOK62BXrsiycUUuqQ+HuYVQs7O5B6VqruBp0P0rNahYzRMMLxXUxJPo5meqXaEGTZt71FIUwcnFQgkDb3qW3s5JOT9mjpaBiuRWSwTTy7Ixwe9H2vw/tw03etBa2sMKjjzUp5DnC9BSttjuKQLBYwRLhQD65pV3xGB5pVnYS0ZiZmk6NUUcYVjuepWj2dqayj1p05ETXhbC7ZgMbuaswE8PjqaokJTo1TC7dByeK9TT9GxNSuy5gwM1yPeHJHTNVcGphTkj8Ke+qD7uBn3rmebjddouwUkuyzusNYTHuBn9aAvovHgJHIIDCio28bTJmJxmLP6mhbWXxLOPHJQlWI70rH8dMqfZRhaRGBRdxD4Uzr+X0odhXVT2tk/pg7DNROvFTsKaRWM0BdcHmoyKutLitJLh/nUMm1CY4vHEIkfIwC2OB1oHVLfwNRnjCInmz4aPvEefu57kdKTzW9B6+yz+CZEj1hRtcyEggrjp3q1VY9S+JZpTISYsgkknBye59h79qzGm3vyLu8cTG448NwxGwd+PfpWzitNPjl+a08yLHcxhhHuBG7n73Uc1Jm6rYyO0Tx3EVxOYbIsEijk3vjhRtPP1PHWs9caMVsxK8Y8w4wMUfpxhgsTP4kirfyeHLGE/unGe/p1/MUc2owHSjA3DjjGeSaCW0+jWk12YNC1vcI44aNsjIz3q4+J/mNR0yyv7gQiQgllV/Ng9DjsKq5+ZnPHXtV9ptqdU0S4VYFWRFET3LvwEHIUL60++tUBJQ/C1ybPX7aXoGbY2fSvZc5ANeGlWifK8OjcY7EGvVdL1N7vTYJAeSo6etOmE3tCMtaNFEA3Uip2ij9R+dUUctw32c/lU6G7bqD+VZeNMGMjLTYi9MUpCm3jFVf/uCcEmiYYJSPM1KU8GN3yJFeNck4oLUDDIhwOaJnttikk0C6JnrRzT30BUrWmUXyG2ctjy0YCqgBOlHNCDxQ8tts6DNUvJtEyxqX0R7jjimNIvQ9akXynzDimvCHYlKkyZK3pMojGtA0rgjilTZ4ihHNcofytdNh8EzOTXqSJ0xVZLeMzbRxTyFoG58shYdPWq8MqFreyXM6rtBJuWAPmqNbyR2AIOKEZyBk9KejnqBTXSFTNFisnc0yWUbTg0FHNJk7+BXJmJU/SkVRTMm8soGbSyB/8df5Z/equwLxNNFzhhke1abRUB0sgj/or/4LWemPg3QbHAPP0rkvL20dCY9HL1C6JIB/lNAHFXt1abYnUHIYcfzqjcdyMV0/Eyq40IyTxZC3sKicZGDwDUxFRN1B7g/lT69AGhvHsUgtLq1nsoLm0wxjicgyAdsjoevJ5qu+MIEF7HfR8tdZYngZ4Xtknnrzyc0R8NRw3QuLSS3gnlZd0Il48316/hTJntbz4fjgvblLeWzkKomzzHA4AHXv1PpUb+Nf6He0Umig/wBoREZG0Mwx16cYraQLBLpUDRHMiEhsDDHPf86wKO0bB422uDkEdq2PwtLeXrzXgg8SJEMRSMc7+CCfahzxvs9DS6JWhuLITRRRrIl1MHZR1TgZwfXNc1W08W32zMIZo8nxFOQR6ULp+r3VjC4vIJVVXKFymQCP6xQl7r5ncq0Ikjx9480uJbfQVMo3GCRnPv61c/DE90s0traypCZhku5wFUHmqh8EnHSmbtjeXPTrmqrna0KQTrcEUOoyiBleMncjL0Oa3H8N5op9NmgkUM0LHH0Nedu2epOPetP/AA4vPl9caAnyTxkEe4obTmOjdJvs9P2IPsxgVwy4OAgogMOmKi2Lv9qhdsdxR1QGGSgqCaQocKp5osbclQR7V3bnhwKKMvfZ549roG2+InmqrvrZ4iXQEj2q5kUJyPypHZKMEZqqb09iLjkjLxtJI3BPHajYlwPOKJutO8NjJH9cCoUkVvKSAemKZly/H4oREafZDNGko8q4xQDBlfABAq1ZdjYFQy7NpyADXHuqplylIqbsYAJPWu0y7yx9R2pUlvIbxk8/kIAyc1XzTBlITcPrVrdRb1K9CKrWtGAyTX0qOU9voEM0h8vXFOiuHLbWGKeI/DJyKj3AMeKB0g5knLmmCRzw1NByacilpEUdSwH60LGI9e0hdtiV9IwPyUCs3qAxMxPAzWp08Bbeb082PpuNZfU2xIeM56iuDvs6S9IsLR/mdLXu8Y2H8On6VR3SkSkY4JyKL0K6VL027nyzDGf8w6V3WIWRiQOAfKPY1X4WThk4MXmncbRVbgvLdM816UdC06b4bmg0+DCXFusiS8Ft/uevUdK8zbn6dxWx+G/ii003QmivNzT28m6JMnzg9R/P866XkKmk5J419mQ0q5FjqsEkuURHAfIPAzz09P2q+W3Fr8V7TG+L9fFt3lhwytg4wgHqCMcfd+tZzUZ1urya5SLw0kkLiNT0zVsxZvhy2ubKPw3tZt0riLcN+c5LHOOikgADnvQZF6oKf4UGqxlNTu0IYHxWPmTbkE5Bx+Oam03V7zTInjtZNgdgx461Y/FyRyTwX0IVluI8s28uxbAOG7A4IGFAHHHSs+etFPzlbB9M2yfG0V1oz2epWKPNtxvQcPjpketY4nJzjGe1MFPr0RM70edN+xGomOKe3GM96jKtI4RASxOABRHhhyxAUEknAAHWvQvgj4ZktSmo3hKykHYncU74P+GYrJFvtSAafGUX/D/vWt8ZvugKv6il02+jUFLktntUhcHoKBUyNJjdgUSI5DyGqesaDVCHlfk0WMMmR1qCOEPy/JqYIqjApLhDFTOSKGWhEjeMnvk0SSqck9KasyvnHP4UcPQLWxw8wquvtNWQ+JEcMOwo53I7YqIyPnynBp81rtC6W/ZSNdiE+FMMN05FCzXcSnJ/Kry9so7uPzgeJ/iFZu9szE5WUHA6N602MeG3tk+R5YXQyXUIuNqClQjW6Z44pVUseNfRLzyP7MzLHlSR3qOSAFcAUUfMseAecZpzKKxyGqWyjuIMdqrXQlyK08kKt1FVktsA7Ej2pTQ1MrFjx1NGaRGsmrWankGZc/TNDzQoHwCc/Wi9GULqUboDlEdvxCnFLfaG+mepWJK6blvteEufx5rIatcqspOa0NxfLFpRZeNxwPoBj/WvPNWvRvJLZOagnB9sp5nLjUGjlEiNho2DDHtW6uXj1GwhvIgCkqA8f1615HcXwLkLy3at/wDw9vTdaRcafMRvhO9B/lP+9DmWmrX0HPa0QvkEg9c81Ax+mfejNSXZcEgYD8j61XucGutFcpTJGtMRODkdalivp4bWa1jlKxTkGQDvjjGfQ55+goVmpufWtaTXZ5BM97cTWsFq8paCHOxCBhc9TQmMdBgU7rXDQ60aIV3P5U0etEWdnPqFwsFrGXcnt296xtJbZutkUFvNeTrBAjO7HgDrXpvwr8Hw6bAJbxBLcyKCc8hPap/hj4et9Gg3ld9y325D2+laFGwpVMscZye9TVl36GqdFJJIIbz5WY4IHlzVgGTwshc/SmapYrdRRz7cvCefXFMgTy/a3DGaNVtAUToGz149KKtyQMOaCEbKMl+2a7HIxIA5J7VlM9KbLQYHSuZ5oePeFO4hfanMrAA7vpUt7Q5SOkXJ6D86jLRopCthq45YoUPDHoKZDCWbdvHHXilpmudHXmRv8TfQVFLKsYyYpG9gKPHhqv3V/eopZIzwTmmzk10wXDZSz6qYwQls2e2TQ63wvF8K5tmBPf0q0ktrYPvKZNNdIVbIhOcdhT1a9oW4b9mZvLdoGznchPBrtaC4gWVBtUZP+IdaVULPpEz8fb6PPSiPNGUG7qS4PTj/AHqUxe1Dwq0c3DouVPG7jtR8Z8ROSMj0NV0tEWOt7BGiHpQZhDKxx3NXBQUMkY2Hp9o/zoNDNlFe6c0q74yMjtUGhIy3jqwwQmOfdh+2a0JUBs5qPw4ZJ0dd0cueqjrxn9qVUD5yJeznxJfrbWyR7uVXp715vfXM1zKeoX1rfatost3KZXzJnn6VQXWiSR5Ph9KS8Y38n8MvDCTOnqT1rYfCcp07VLec/YY+HJ7qaqILMpfRqy/exWiSzXwxxx7VNlXeijHXWy/1m2KwuWHMUmQR3X/jFZx2yAa2PzCXWkxSTHz42P8AyrH3KGGaSJuqMRTvFp8eIGT3sizSzTSaaTVQskBrpzjOM1CH5x61dfD2g3euXCiIFbYHEk3YfT3oKtStsLWwbSdNudVvI7e2U8thnPRfr+Vep6DpFtpEPgW67mON8hHLH/SiINItNN002tnFtjXBZseZz6mprV2kwjkG4jA34OMg9G/GoqzOn/gap0FumCMncKcOBiPsajfOBjtSjbByp5opS0ebYYmM8jIP2qq5oPlLkoPsNyh/aj4C27aR5T3p9zB8xblOksZyhNEgSruFzGrZ4JH5VyGIwiQqMtnOPUU+Ng6lHBHZh6VHLE6vuXJI4DL1x70L2MjTnQUu6SDevlPoaaXJi27gXB+7XEuQBhyOnfgk1HNcFVDRwhSeuTQVpoKU0Tzvm23kHevTI5NdO8IsqLzjlfUVBDJJKwMi7vTjpRYyV5qdy09jafx0RzXMHgrISGQ4C+pPoKSSRuDiLkc4PeobmwinBBVSN27a6bhu9R6GoRpshkDy3cq7TlEjARV/A5zS2+wAkyyvjZaHkdCQNv1oK4nu42OII9oGSCxJ/AYov5SIDzyXD4HeRh/LAqCc6XBk3DW6gdfFcH+ZNPxWwKQJJcOWyJ4YF7LKu0/lmlQs2v8Aw7C2I7mz9/CTd/4iu1Vpv6Eul/TJx2luJZMYJQDgv/XpRHgqBkLx6g4qkgv1kuN8NqXL8Lj1/o0TeXl7bqPFt9iH3711ONM5HOEtoscDPK/rUSIoTp1JP6023laWNWx196jWeJY03SKCQOM0LGLtbJtg6iuNH5o+nX9jT4jvwQCRTpJUQxs5wN37GsXZ5k8e3bhhUFxaxSqR0omOaEjO4YprSqThUz9aF42wvzKTIXNsU1BcDcok6j61a+EVRsjABoi6jCgtsUASKTj8Kvv7KWcOBwfNyPZjUPlY+Nos8TKrxszVhdxySS2aSqJJVJjyOjD+s/hQWsx48KfGNw2uPRh/WPwqyvdPNjOkskefCbere4paxAslpKY8srgTJ9e/9e9DD4sc+zMGmk8fpXHYDqRWt+EvhKS8KX2pwSfLDDJEfL4noSewqm7UrYKQJ8J/DMmsT+LdborNRknH94PavUbQQ2kKWtlFFDEvlAzngd/+aesI8OOPZFHFGQVjRfs4qVIIgDhc89zXNyZnbHKNEUdwUXwtzXDkcmNcD/SobS2mkuEaQrH8vlDg5Z1PY9sdPyqwH2VAHSmyB0lEigkFcNjsfWl8gtDwACRnNcicCQqEx6E96aGj6BXYeyH966yyEgrF05zu6Z9qdFgtaCVJB29KfvKOr5zjr7ihdz4w8qrjpgdKf8zGv/dY+yYNObSASbINThMUwnXAjlPP1qIPxnNGSywzwvC8MoQjGSo8vp3quhRY4913NEgUkZLYz715Mz0FxEN5cAj3rrR54wFPYkUDPrVhaqRF4kzDj/0l4P4mqu616+fPgwRQA9Gk8zf6Uax2/oF5ZX2aCNMNgk9MnApXF/Z2iHxpkH6msS+qXSTbp7qWYNwyZwPwA6UcGjuLeORSNrLkDPSi/wCry/Zin5OvSDr34qiiz8rayyHONzeUVTXfxBrExPhvFbr/AJEyfzNdngVlIJobaGx6nr7U+PFwz9E9eRlb9lbdm9ugfmdQu5O/94VH5DFDDT4CQ5TJ65bmrsWzyfZT86i+VkQtlcjPGPSnJQl0he7bABaxjogH4UqOePZjeMZ6Uq3aPaK+BESRtkarhhjaPaidejE2myFmYbTkbTSpUL/dByl+NlZp8SSWitIu8jy+b0xRNrtS3j2Iq8AYAwKVKjftiofxRLJIyDI6/wAqGuZXaOPJ+9+xpUqLH7Ay+h8ShlBOT9aLiVePKPyrtKnET9ivkUWNyQACAO30rZ2SKWbj/qOP1pUq5/m/ujrf8d/5slvLC3mTEiZHGR61i9UAsGht4Rujdhw/O3PXFKlUZeQfCOh2Nzqt49xGZBaNmNGPlznuO+K9GI2qAO3T2pUqK/R6SaNVKA4xmnqAFpUqgr2UIco4qWOMMGbJGB2NKlXkaA/OSNKUCooBxkDP86mVncqHdjyR6fypUqqhIS2wPW7ltMjDwxo5Iz/6gJ/liqm31i9uk3eIsXsiD981ylTklsRkb0cuFaSZfGlllGNwDuSFPsO1NSOONtqRRqDycLSpVdKWiNt7IrtsIxAA2kEYFBTsWJyfu5pUq0FgIUElj1FT6JLKt/dWwlYwg5CkDqef3pUqVYyUWsQWaYoyDGD0pyxIol2jpSpVm3oPSCTCjYGMd8jiq2eTwrxY1jQgtgk5yRilSpbbGJIC1CUKc+FGee4P+tKlSrU2e4o//9k=",
    videoUrl: "#",
    overlayText: "CLIENT TESTIMONIAL",
    additionalInfo: "UK STUDY VISA",
  },
  {
    id: 2,
    name: "Sharath Chandra, Canada",
    location: "Canada",
    image: "data:image/jpeg;base64,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",
    videoUrl: "#",
    overlayText: "Study Visa, Canada",
    additionalInfo: "Mr. Sharath Chandra",
  },
  {
    id: 3,
    name: "Naresh Kadaba, Germany",
    location: "Germany",
    image: "data:image/jpeg;base64,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",
    videoUrl: "#",
    overlayText: "CLIENT TESTIMONIAL",
    additionalInfo: "GERMANY JOB SEEKER VISA",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const openVideoPopup = (testimonial) => {
    setSelectedVideo(testimonial);
  };

  const closeVideoPopup = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mb-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Hear From Our Students
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Slider Content */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {/* Show current testimonial and next two */}
            {[0, 1, 2].map((offset) => {
              const testimonialIndex =
                (currentIndex + offset) % testimonials.length;
              const currentTestimonial = testimonials[testimonialIndex];

              return (
                <div
                  key={`testimonial-${testimonialIndex}`}
                  className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onClick={() => openVideoPopup(currentTestimonial)}
                >
                  {/* Video Card */}
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-black">
                    <Image
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />

                    {/* Y-AXIS Logo */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-400 text-black px-2 py-1 text-sm font-bold">
                        Y AXIS
                      </div>
                    </div>

                    {/* Overlay Text */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-yellow-400 text-black px-3 py-1 text-sm font-bold mb-2 inline-block">
                        {currentTestimonial.overlayText}
                      </div>
                      {currentTestimonial.additionalInfo && (
                        <div className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold inline-block">
                          {currentTestimonial.additionalInfo}
                        </div>
                      )}
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 rounded-full p-4 group-hover:bg-white/30 transition-all duration-200">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>

                  {/* Name */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {currentTestimonial.name}
                    </h3>
                    <div className="w-12 h-1 bg-orange-500 mt-1"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-orange-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeVideoPopup}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Content */}
            <div className="aspect-video bg-black">
              <Image
                src={selectedVideo.image || "/placeholder.svg"}
                alt={selectedVideo.name}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />

              {/* Play Button in Modal */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 rounded-full p-6">
                  <Play className="w-12 h-12 text-white fill-white" />
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedVideo.name}
              </h3>
              <p className="text-gray-600 mb-4">{selectedVideo.overlayText}</p>
              {selectedVideo.additionalInfo && (
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold">
                  {selectedVideo.additionalInfo}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
