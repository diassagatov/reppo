function attendanceInfo(lessons, attendance) {
  const context = {
    good: "Хотим поделиться хорошей новостью: ваш ребенок имеет отличную посещаемость наших уроков программирования. Это замечательно, и ваша поддержка играет важную роль в успехе.",
    mid: "Хотим обратить ваше внимание на то, что посещаемость наших уроков программирования является хорошей, но не отличной. С нашей стороны мы предоставим вам бесплатные дополнительные занятия, вам необходимо будет указать время и дни для комфортного прохождения данных уроков.",
    low: "Хотели бы обратить ваше внимание на посещаемость уроков вашего ребенка. К сожалению, она несколько ниже желаемой. Важно помнить, что регулярное участие на уроках играет ключевую роль в успехе обучения. С нашей стороны мы предоставим вам бесплатные дополнительные занятия, вам необходимо будет указать время и дни для комфортного прохождения данных уроков.",
  };

  let percentage = 0;
  if (attendance !== 0 && lessons !== 0) {
    percentage = (attendance / lessons) * 100;
  }

  if (percentage > 79) {
    return context.good;
  } else if (percentage >= 50) {
    return context.mid;
  } else {
    return context.low;
  }
}

function homeworksInfo(homeworksOverall, homeworksTurned) {
  const context = {
    good: "Ребенок продемонстрировал отличную успеваемость.Это великолепное достижение! Пожалуйста, продолжайте вдохновлять и поддерживать его в его образовательном путешествии.",
    mid: "Успеваемость вашего ребенка находится на среднем уровне. Это означает, что есть потенциал для улучшения. Мы верим в потенциал каждого ученика и готовы предложить дополнительную поддержку, чтобы помочь вашему ребенку достичь лучших результатов. Если у вас есть какие-либо вопросы или замечания, пожалуйста, свяжитесь с нами. Мы готовы обсудить индивидуальный план для вашего ребенка, который поможет ему улучшить свою успеваемость.",
    low: "На данный момент успеваемость оставляет желать лучшего. Мы понимаем, что учебные трудности могут возникать у каждого ребенка, и мы готовы предложить поддержку. Если у вашего ребенка возникли трудности в учебе, давайте обсудим, какие шаги мы можем предпринять, чтобы помочь ему улучшить успеваемость. Мы также призываем вас включиться в процесс обучения вашего ребенка и поддержать его в учебе. Совместными усилиями мы сможем помочь ему добиться лучших результатов.",
  };

  let percentage = 0;

  if (homeworksOverall !== 0) {
    try {
      percentage = (homeworksTurned / homeworksOverall) * 100;
    } catch {
      percentage = 0;
    }

    if (percentage > 79) {
      return context.good;
    } else if (percentage >= 50) {
      return context.mid;
    } else {
      return context.low;
    }
  }

  return context.low;
}

function problems(problems) {
  const context = {
    "Плохой интернет":
      "В последнее время мы столкнулись с некоторыми трудностями, связанными с качеством интернета в нашем учебном процессе. В течение урока наблюдается существенное замедление интернет-скорости, что создает неудобства для учащегося в процессе усвоения материала либо подключения к уроку.Для того, чтобы максимально эффективно решить этот вопрос, мы рекомендуем провести небольшую проверку оборудования и настроек устройств в доме.",
    "Частые опоздания":
      "В последнее время мы наблюдаем, что у учащегося возникают трудности с соблюдением установленного графика занятий, что может отрицательно сказываться на его академической эффективности.Для улучшения ситуации мы готовы обсудить график вашего ребенка и, при необходимости, адаптировать его, чтобы обеспечить удобство и точность во времени.",
    "Слабое владение компьютером":
      "Ученик проявляет старания и интерес к учебному материалу, однако мы заметили, что у него могут возникать трудности из-за ограниченных навыков работы с компьютером.Для того, чтобы максимально эффективно решить этот вопрос, мы рекомендуем в свободное время просмотреть курс 'Компьютерная грамотность', который предоставляет основы компьютерных навыков. Данный шаг положительно повлияет на дальнейшее успешное выполнение заданий.",
    "Отвлечение на посторонние дела":
      "Мы заметили, что время от времени учащийся может отвлекаться на посторонние дела. Это может негативно сказаться на его способности полностью усваивать учебный материал и эффективно участвовать в классных активностях. Мы осознаем, что каждый ученик имеет свои особенности и ритм обучения. Однако, для того, чтобы добиться желаемых результатов, постарайтесь обеспечить тихое и лишенное отвлекающих элементов место для выполнения учебных заданий.",
    "Проблем нет": " ",
  };

  // Default to a single empty element if problems is null or undefined
  const problemsList = problems
    ? problems.split(", ").map((p) => p.trim())
    : [""];
  const detailedProblems = problemsList.map(
    (problem) => context[problem] || ""
  );
  return detailedProblems;
}

function activityInfo(activity) {
  const context = {
    good: "Хотелось бы выразить наше восхищение активностью ребенка на уроках. Энтузиазм и участие в учебном процессе не остаются незамеченными. Активное участие на уроках является ключевым фактором успешного обучения, продолжайте в том же духе!",
    mid: "На данный момент его уровень активности можно охарактеризовать как средний. Мы всегда стремимся максимально вовлекать всех учеников в учебный процесс и вдохновлять их на участие. Если у вашего ребенка есть особые интересы или пожелания по урокам, пожалуйста, дайте нам знать. Мы готовы работать с вами и вашим ребенком, чтобы создать условия для его активного участия и максимального развития.",
  };

  if (activity == 5 || activity == 4) {
    return context.good;
  }
  if (activity == 3) {
    return context.mid;
  }
  return "";
}

//experimantal
const fullUrl = window.location.href; // Full URL including query parameters
console.log(fullUrl);
const paramsObject = {};
// Extract the query string from the full URL
const queryString = fullUrl.split("?")[1]; // Everything after the '?'

// Check if query string exists
if (queryString) {
  // Split query string into key-value pairs
  const paramsArray = queryString.split("&");

  // Initialize an empty object to hold parsed parameters

  // Loop through each key-value pair and split them into the object
  paramsArray.forEach((param) => {
    const [key, value] = param.split("=");
    paramsObject[decodeURIComponent(key)] = decodeURIComponent(value);
  });

  console.log(paramsObject); // Logs the parsed parameters as an object
} else {
  console.log("No query parameters found.");
}
//experimantal
// Initialize report data with defaults
const reportData = {
  full_name: paramsObject["3"],
  attendance: paramsObject["5"],
  lessons: paramsObject["4"],
  homeworks_turned: paramsObject["7"],
  homeworks_overall: paramsObject["6"],
  activity: paramsObject["10"],
  month: paramsObject["month"],
};

reportData["attendance_info"] = attendanceInfo(
  paramsObject["4"],
  paramsObject["5"]
);

reportData["homeworks_info"] = homeworksInfo(
  paramsObject["6"],
  paramsObject["7"]
);

const problem_list = problems(paramsObject["9"]);
const problem_container = document.querySelector(".problem_container");
let was = 0;
problem_list.map((element) => {
  if (element != " ") {
    was = 1;
    const prob = document.createElement("div");
    prob.classList.add("problem");
    prob.innerText = element;
    problem_container.appendChild(prob);
  }
});
if (was == 0) {
  const prob = document.createElement("p");
  prob.innerText = "Проблем по ученику не было отмечено.";
  problem_container.appendChild(prob);
}

const lessons_list = paramsObject["8"].split(".,");
const lessons_cont = document.querySelector(".what_learned");
lessons_list.map((element) => {
  if (element != " ") {
    const prob = document.createElement("div");
    prob.classList.add("lesson");
    prob.innerText = element;
    lessons_cont.appendChild(prob);
  }
});

const skills_list = (paramsObject["11"] || "").split(";,");
const skills_cont = document.querySelector(".skills");

skills_list.map((element) => {
  if (element.trim() !== "") {
    const prob = document.createElement("div");
    prob.classList.add("lesson");
    prob.innerText = element;
    skills_cont.appendChild(prob);
  }
});

reportData["activity_info"] = activityInfo(paramsObject["10"]);

const attend_percent =
  // Populate template with data
  (document.body.innerHTML = document.body.innerHTML.replace(
    /\{\{\s*(\w+)\s*\}\}/g,
    (_, key) => reportData[key] || ""
  ));

// Function to download the report as PDF
document.getElementById("downloadBtn").addEventListener("click", () => {
  const element = document.querySelector(".report");

  // Use html2pdf to convert the element to a PDF
  html2pdf()
    .from(element)
    .set({
      pagebreak: { mode: ["css"] }, // Avoid cutting elements
      margin: [4, 0, 4, 0],
    })
    .save(paramsObject["3"].trim() + ".pdf");
});
