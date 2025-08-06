document.addEventListener('DOMContentLoaded', function () {
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        course.addEventListener('click', function () {
            if (!course.classList.contains('locked')) {
                course.classList.toggle('completed');
                updateUnlocks();
            }
        });
    });

    function updateUnlocks() {
        courses.forEach(course => {
            const prereqs = course.getAttribute('data-prerequisite');
            if (prereqs) {
                const prereqList = prereqs.split(',').map(p => p.trim());
                const allMet = prereqList.every(reqId => {
                    const prereqCourse = document.getElementById(reqId);
                    return prereqCourse && prereqCourse.classList.contains('completed');
                });

                if (allMet) {
                    course.classList.remove('locked');
                } else {
                    course.classList.add('locked');
                    course.classList.remove('completed');
                }
            }
        });
    }

    updateUnlocks();
});
