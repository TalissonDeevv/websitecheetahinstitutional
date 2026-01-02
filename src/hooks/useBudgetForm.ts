import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "cheetah_budget_form";

export interface BudgetFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  description: string;
  budget: string;
  timeline: string;
  features: string[];
}

export type LeadQualification = "exploratório" | "médio" | "avançado";

// Mapeamento de serviços para recursos relacionados
const serviceFeatureMap: Record<string, string[]> = {
  "Bot Discord/Telegram": ["Integração WhatsApp", "Chat ao Vivo"],
  "Website": ["SEO Otimizado", "Design Responsivo", "Analytics"],
  "Sistema Web": ["Dashboard Administrativo", "Sistema de Usuários", "Relatórios"],
  "E-commerce": ["Sistema de Pagamento", "Dashboard Administrativo", "SEO Otimizado", "Analytics"],
  "Integração API": ["Dashboard Administrativo", "Relatórios"],
  "App Mobile": ["Sistema de Usuários", "Design Responsivo", "Analytics"]
};

const initialFormData: BudgetFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  description: "",
  budget: "",
  timeline: "",
  features: []
};

export const useBudgetForm = () => {
  const [formData, setFormData] = useState<BudgetFormData>(initialFormData);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Carregar dados do localStorage ao inicializar
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
      }
    } catch (e) {
      // Ignora erro de parsing
    }
  }, []);

  // Salvar dados no localStorage quando mudar
  useEffect(() => {
    if (!submitted) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      } catch (e) {
        // Ignora erro de storage
      }
    }
  }, [formData, submitted]);

  // Limpar dados após envio
  const clearFormData = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setFormData(initialFormData);
    setAcceptTerms(false);
  }, []);

  // Atualizar campo individual
  const updateField = useCallback(<K extends keyof BudgetFormData>(
    field: K,
    value: BudgetFormData[K]
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  // Toggle de feature
  const handleFeatureChange = useCallback((featureName: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked
        ? [...prev.features, featureName]
        : prev.features.filter(f => f !== featureName)
    }));
  }, []);

  // Recursos sugeridos baseados no serviço selecionado
  const getSuggestedFeatures = useCallback((): string[] => {
    return serviceFeatureMap[formData.service] || [];
  }, [formData.service]);

  // Validação da descrição
  const getDescriptionValidation = useCallback((): { isValid: boolean; message: string } => {
    const length = formData.description.trim().length;
    if (length === 0) {
      return { isValid: false, message: "" };
    }
    if (length < 120) {
      return { 
        isValid: true, 
        message: `Descrições mais detalhadas ajudam a criar propostas mais precisas (${length}/120 caracteres recomendados)` 
      };
    }
    return { isValid: true, message: "" };
  }, [formData.description]);

  // Qualificação do lead (interno, não exibido)
  const getLeadQualification = useCallback((): LeadQualification => {
    let score = 0;

    // Pontuação por orçamento
    const budgetScores: Record<string, number> = {
      "ate-1000": 1,
      "1000-2500": 2,
      "2500-5000": 3,
      "5000-10000": 4,
      "acima-10000": 5
    };
    score += budgetScores[formData.budget] || 0;

    // Pontuação por prazo (mais urgente = mais qualificado)
    const timelineScores: Record<string, number> = {
      "flexivel": 1,
      "30-dias": 2,
      "rapido": 3,
      "urgente": 4
    };
    score += timelineScores[formData.timeline] || 0;

    // Pontuação por recursos selecionados
    score += Math.min(formData.features.length, 5);

    // Pontuação por descrição detalhada
    if (formData.description.length >= 200) score += 2;
    else if (formData.description.length >= 120) score += 1;

    // Pontuação por empresa informada
    if (formData.company.trim()) score += 1;

    // Classificação
    if (score >= 10) return "avançado";
    if (score >= 5) return "médio";
    return "exploratório";
  }, [formData]);

  // Validação de telefone (formato brasileiro)
  const isPhoneValid = useCallback((): boolean => {
    const cleaned = formData.phone.replace(/\D/g, "");
    // Telefone brasileiro: 10 ou 11 dígitos
    return cleaned.length >= 10 && cleaned.length <= 11;
  }, [formData.phone]);

  // Validação de email
  const isEmailValid = useCallback((): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email.trim());
  }, [formData.email]);

  // Validação geral do formulário
  const isFormValid = useCallback((): boolean => {
    return !!(
      formData.name.trim() &&
      formData.email.trim() &&
      isEmailValid() &&
      formData.phone.trim() &&
      formData.service &&
      formData.description.trim() &&
      acceptTerms
    );
  }, [formData, acceptTerms, isEmailValid]);

  // Marcar como enviado
  const markAsSubmitted = useCallback(() => {
    setSubmitted(true);
    clearFormData();
    // Reset submitted após um tempo
    setTimeout(() => setSubmitted(false), 3000);
  }, [clearFormData]);

  return {
    formData,
    setFormData,
    updateField,
    acceptTerms,
    setAcceptTerms,
    handleFeatureChange,
    getSuggestedFeatures,
    getDescriptionValidation,
    getLeadQualification,
    isPhoneValid,
    isEmailValid,
    isFormValid,
    submitted,
    markAsSubmitted,
    clearFormData
  };
};
