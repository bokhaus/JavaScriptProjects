const userInterfaceMenu = (() => {
    const projectListDisplay = document.querySelector(".project-list");

    const createProjectListItemHtml = (container) => {
        return `
        <li class="project-list-item clickable" id="${container.getProjectID()}">
            <p>${container.getName()}</p>
            <div class="delete-project-btn"><i class="fas fa-times"></i></div>
        </li>`;
    };

    const renderProjectList = (projectContainers) => {
        const html = projectContainers.map(container => {
            return createProjectListItemHtml(container);
        }).join('');

        projectListDisplay.innerHTML = html;
    };

    const highlightProjectItem = (containerID) => {
        projectListDisplay.childNodes.forEach(projectItem => {
            // ignore text nodes (type = 3)
            if(projectItem.nodeType != 3) {
                if(projectItem.id === containerID) {
                    projectItem.classList.add("selected");
                } else {
                    projectItem.classList.remove("selected");
                }
            }
        });
    }

    return {
        renderProjectList,
        highlightProjectItem
    };
})();

export default userInterfaceMenu;