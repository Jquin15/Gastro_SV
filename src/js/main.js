"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MENÚ HAMBURGUESA INTERACTIVO ---
  const hamburger = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // --- 2. INTERACTVIDAD AVANZADA: SELECCIÓN AUTOMÁTICA DESDE TARJETAS ---
  const cardButtons = document.querySelectorAll(".card-action-btn");
  const experienceSelect = document.getElementById("experience");

  cardButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const experiencia = e.target.getAttribute("data-experiencia");
      experienceSelect.value = experiencia;

      document
        .getElementById("reservas")
        .scrollIntoView({ behavior: "smooth" });
      experienceSelect.focus();
    });
  });

  // --- 3. VALIDACIÓN DE FORMULARIO CON JAVASCRIPT ---
  const form = document.getElementById("booking-form");
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const dateInput = document.getElementById("date");
  const guests = document.getElementById("guests");
  const experience = document.getElementById("experience");
  const toast = document.getElementById("success-toast");

  // Validar que la fecha sea futura de forma dinámica
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.setAttribute("min", tomorrow.toISOString().split("T")[0]);

  const validateName = () => {
    const val = fullname.value.trim();
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;
    if (val.length < 4 || !regex.test(val)) {
      setError("group-name");
      return false;
    }
    setSuccess("group-name");
    return true;
  };

  const validateEmail = () => {
    const val = email.value.trim();
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!regex.test(val)) {
      setError("group-email");
      return false;
    }
    setSuccess("group-email");
    return true;
  };

  const validateDate = () => {
    if (!dateInput.value) {
      setError("group-date");
      return false;
    }
    setSuccess("group-date");
    return true;
  };

  const validateGuests = () => {
    const val = parseInt(guests.value, 10);
    if (isNaN(val) || val < 1 || val > 20) {
      setError("group-guests");
      return false;
    }
    setSuccess("group-guests");
    return true;
  };

  const validateExperience = () => {
    if (experience.value === "") {
      setError("group-experience");
      return false;
    }
    setSuccess("group-experience");
    return true;
  };

  const setError = (id) => document.getElementById(id).classList.add("invalid");
  const setSuccess = (id) =>
    document.getElementById(id).classList.remove("invalid");

  fullname.addEventListener("blur", validateName);
  email.addEventListener("blur", validateEmail);
  dateInput.addEventListener("change", validateDate);
  guests.addEventListener("blur", validateGuests);
  experience.addEventListener("change", validateExperience);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      validateName() &&
      validateEmail() &&
      validateDate() &&
      validateGuests() &&
      validateExperience()
    ) {
      toast.classList.add("show");
      form.reset();
      setTimeout(() => toast.classList.remove("show"), 4000);
    }
  });
});
