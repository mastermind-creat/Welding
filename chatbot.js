// Floating WhatsApp icon already animated via Tailwind

      // Chatbot widget logic
      const chatbotToggle = document.getElementById("chatbotToggle");
      const chatbotWindow = document.getElementById("chatbotWindow");
      const chatbotForm = document.getElementById("chatbotForm");
      const chatbotInput = document.getElementById("chatbotInput");
      const chatbotMessages = document.getElementById("chatbotMessages");
      let chatbotOpen = false;
      chatbotToggle.addEventListener("click", () => {
        chatbotOpen = !chatbotOpen;
        chatbotWindow.classList.toggle("hidden", !chatbotOpen);
      });
      chatbotForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const userMsg = chatbotInput.value.trim();
        if (!userMsg) return;
        appendChatMsg("You", userMsg, "right");
        chatbotInput.value = "";
        setTimeout(() => {
          appendChatMsg("Engineer Owino Ngode", getBotReply(userMsg), "left");
        }, 700 + Math.random() * 500);
      });
      function appendChatMsg(sender, msg, side) {
        const div = document.createElement("div");
        div.className = `flex ${
          side === "right" ? "justify-end" : "justify-start"
        } animate__animated animate__fadeInUp`;
        div.innerHTML = `<div class="max-w-[70%] px-4 py-2 rounded-xl ${
          side === "right"
            ? "bg-flame-500 text-white"
            : "bg-steel-800 text-white"
        } shadow-lg">${sender}: ${msg}</div>`;
        chatbotMessages.appendChild(div);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }
      function getBotReply(msg) {
        msg = msg.toLowerCase();
        if (
          msg.includes("price") ||
          msg.includes("cost") ||
          msg.includes("how much")
        )
          return "Pricing depends on project details like materials, complexity, and timeline. For a custom quote, please share your project requirements.";
        if (msg.includes("certif") || msg.includes("qualified"))
          return "I am AWS D1.1 certified and OSHA safety trained with over 10 years of experience in industrial and residential welding.";
        if (
          msg.includes("mobile") ||
          msg.includes("on-site") ||
          msg.includes("travel")
        )
          return "Yes, I offer mobile/on-site welding services with all necessary equipment. I serve Nairobi and surrounding areas.";
        if (
          msg.includes("contact") ||
          msg.includes("reach") ||
          msg.includes("number")
        )
          return "You can reach me via WhatsApp at +254705455409, phone call, email at hello@proweld.com, or through the contact form on this website.";
        if (
          msg.includes("timeline") ||
          msg.includes("how long") ||
          msg.includes("time")
        )
          return "Project timelines vary based on complexity. Small repairs: 1-2 days, Custom fabrication: 3-7 days, Large projects: 1-2 weeks. I'll provide a specific timeline after discussing your project.";
        if (
          msg.includes("material") ||
          msg.includes("steel") ||
          msg.includes("aluminum") ||
          msg.includes("stainless")
        )
          return "I work with various materials including mild steel, stainless steel, aluminum, and other alloys. The best material depends on your project's requirements and budget.";
        if (
          msg.includes("service") ||
          msg.includes("what do you do") ||
          msg.includes("offer")
        )
          return "I offer industrial welding, repairs & maintenance, custom fabrication, and mobile on-site services. This includes gates, railings, structural work, machinery repair, and custom metal pieces.";
        if (
          msg.includes("experience") ||
          msg.includes("how long") ||
          msg.includes("year")
        )
          return "I have over 10 years of professional welding experience across various industries including construction, manufacturing, and residential projects.";
        if (
          msg.includes("emergency") ||
          msg.includes("urgent") ||
          msg.includes("asap")
        )
          return "I offer emergency repair services for critical situations. Please call or WhatsApp me directly at +254705455409 for urgent requests.";
        if (
          msg.includes("payment") ||
          msg.includes("pay") ||
          msg.includes("deposit")
        )
          return "For most projects, I require a 30% deposit with the balance upon completion. I accept mobile money, bank transfer, or cash.";
        return "I'm here to help with your welding and metal fabrication needs! You can ask me about services, pricing, materials, timelines, or anything else about my work.";
      }

      // Animated stats
      function animateStat(id, end, duration) {
        let start = 0;
        const step = Math.ceil(end / (duration / 30));
        const el = document.getElementById(id);
        if (!el) return;
        if (el.dataset.animated === "true") return;
        el.dataset.animated = "true";
        const interval = setInterval(() => {
          start += step;
          if (start >= end) {
            el.textContent = end + "+";
            clearInterval(interval);
          } else {
            el.textContent = start + "+";
          }
        }, 30);
      }

      function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      }

      function triggerStatsAnimation() {
        const projects = document.getElementById("statProjects");
        const clients = document.getElementById("statClients");
        const years = document.getElementById("statYears");
        if (projects && isInViewport(projects))
          animateStat("statProjects", 120, 1200);
        if (clients && isInViewport(clients))
          animateStat("statClients", 85, 1200);
        if (years && isInViewport(years)) animateStat("statYears", 11, 1200);
      }

      window.addEventListener("scroll", triggerStatsAnimation);
      window.addEventListener("DOMContentLoaded", triggerStatsAnimation);